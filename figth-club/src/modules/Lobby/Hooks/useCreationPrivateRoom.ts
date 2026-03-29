import { useState } from "react";
import { lobbyApi } from "../Config/axiosLobby";
import  { userDataLocalStorage } from "../Types/localUserData";
import { useNavigate } from "react-router-dom";



export const useCreationPRoom = () => {
    const navigate = useNavigate();
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const createRoom = async () => {
        if (!userDataLocalStorage) { setError("No hay usuario"); return; }
        setLoading(true);
        try {
            const res = await lobbyApi.createLobby(userDataLocalStorage.userId);
            navigate(`/waiting-room/${res.roomCode}`); 
        } catch (error: any) {
            setError("Error: " + (error.message || error));
        } finally {
            setLoading(false);
        }
    };

    return { createRoom, error, loading };
};