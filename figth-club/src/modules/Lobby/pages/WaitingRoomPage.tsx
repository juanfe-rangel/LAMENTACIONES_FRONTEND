import {  useNavigate, useParams } from "react-router-dom";
import { WaitingRoom } from "../Components/WaitingRoom/WaitingRoom";
import { useJoinWaitingRoomg } from "../Hooks/useJoinWaitingRoom";
import { userDataRaw } from "../Types/localUserData";



export const WaitingRoomPage: React.FC = () => {
    const { roomCode } = useParams();
    const navigate = useNavigate();

    
    const userId = userDataRaw ? JSON.parse(userDataRaw).userId : null;

    const { room, connected, error } = useJoinWaitingRoomg({ 
        roomCode: roomCode!, 
        userId 
    });


    if (!userId || !roomCode) { navigate("/"); return null; }
    if (error) return <div>Error: {error}</div>;
    if (!connected || !room) return <div>Conectando...</div>;

    return <WaitingRoom roomRequest={room} />;
};