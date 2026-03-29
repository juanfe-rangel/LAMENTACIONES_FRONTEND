import { useEffect, useState,useRef } from "react"
import type { Room } from "../Types/RoomTypes"
import { Client } from "@stomp/stompjs";
import SockJS from "sockjs-client";

type props = {
    roomCode: string;
    userId: string;
};

export const useJoinWaitingRoomg = ({roomCode,userId}:props)=>{
    const [room,setRoom] = useState<Room | null>(null);
    const [connected,setConnected] = useState(false);
    const [error,setError] = useState<string | null>(null)
    const clientRef = useRef<Client | null>(null);

    useEffect(()=>{
        const client = new Client({
            webSocketFactory : ()=> new SockJS("http://localhost:8080/lobbyFight"),
            onConnect: () =>{setConnected(true)
                    client.subscribe(`/room/${roomCode}`,(message)=>{
                        const roomState : Room = JSON.parse(message.body);
                        setRoom(roomState);
                    });

                    client.publish({
                        destination: "/game/join-room",
                        body: JSON.stringify({ roomCode, userId }),
                    }); 
                    
            },
            onDisconnect: () => setConnected(false),     
            onStompError: (frame) => setError(frame.headers["message"]),    
        });

        client.activate();
        clientRef.current = client;

        return () => {
            client.deactivate();
        };

    },[userId,roomCode]);

    return { room, connected,error };


}