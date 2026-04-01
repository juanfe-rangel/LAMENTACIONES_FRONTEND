import {  useNavigate, useParams, useSearchParams } from "react-router-dom";
import { WaitingRoom } from "../Components/WaitingRoom/WaitingRoom";
import { useJoinWaitingRoomg } from "../Hooks/useJoinWaitingRoom";
import { userDataRaw } from "../Types/localUserData";



export const WaitingRoomPage: React.FC = () => {
    const [searchParams] = useSearchParams();
    const roomCode = searchParams.get("roomCode");
    const playerType = searchParams.get("playerType");

    const navigate = useNavigate();

    
    const userId = userDataRaw ? JSON.parse(userDataRaw).userId : null;

    
    const { room, connected, error, leave } = useJoinWaitingRoomg({ 
        roomCode: roomCode!, 
        userId,
        playerType : playerType!
    });


    if (!userId || !roomCode) { navigate("/"); return null; }
    if (error) return <div>Error: {error}</div>;
    if (!connected || !room) return <div>Conectando...</div>;

    return <WaitingRoom roomRequest={room} leave={leave} />;
};