import React,{useEffect, useState} from 'react';
import { WaitingRoomHeader } from './WaitingRoomHeader';
import { PlayerContainer } from './PlayerContainer';
import { BottonWaitingBar } from './BottomBar';
import { PreFooterWaitingBar } from './PreFooter/PreFooterWaitingBar';
import type { Room } from '../../Types/RoomTypes';
import type { Player } from '../../Types/PlayerType';

type props={
    roomRequest : Room;
}


export const WaitingRoom: React.FC<props> = ({roomRequest}) => {
    const[players,setPLayers] = useState<Player[]|null>(null)
    const[roomR,setRoomR] = useState<Room>();

   
    useEffect(() => {
        if (!roomRequest) return;
        setRoomR(roomRequest);
        setPLayers(roomRequest.players); 
        
    }, [roomRequest]);

    const playerList = players?.filter(p => p.playerType === "PLAYER") ?? [];

   

    return (
        roomR && 
        <div className="bg-background text-on-background font-body selection:bg-primary selection:text-on-primary h-screen flex flex-col overflow-hidden">
            <WaitingRoomHeader spectatorsNumber={roomR.currentSpectators}/>
            <main className="flex-1 flex flex-col relative mt-16 min-h-0">

                <div className="absolute inset-0 z-20 flex justify-center pointer-events-none hidden md:flex">
                    <div className="w-32 h-full kinetic-gradient-fuego lightning-divider shadow-[0_0_80px_rgba(255,86,38,0.4)] opacity-80"></div>
                </div>

                <div className="flex-1 flex flex-col md:flex-row relative z-10 md:min-h-0 -mt-20">
                    <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
                        <div className="font-orbitron text-5xl sm:text-7xl md:text-[14rem] lg:text-[18rem] font-black text-on-background/5 tracking-[1rem] md:tracking-[2rem] select-none">
                            VS
                        </div> 
                    </div>
       

                    {
                        playerList.map((p, i) => (
                        <PlayerContainer key={i} player={p} />
                        ))
                    }

                    {
                        playerList.length === 1 && <PlayerContainer key={-1} />
                    }

    
                </div>
            </main>
            <PreFooterWaitingBar roomCode={roomR.roomCode} />
            <BottonWaitingBar />
        </div>
    );
};