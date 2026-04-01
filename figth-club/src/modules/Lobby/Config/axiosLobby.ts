import axios from 'axios';
import type { Room } from '../Types/RoomTypes';
import { error } from 'three';


const lobbyApiAxios = axios.create({
    baseURL:  import.meta.env.VITE_API_LOBBY_URL,
    headers: { 'Content-Type': 'application/json' },
  });

const base_rest_uri:string = "/rooms"

export const lobbyApi ={
    
    createLobby: async(hostId:string): Promise<Room>=>{
        const res = await lobbyApiAxios.post(`${base_rest_uri}/create-private`,null,{
            params: { hostId }
        }).catch((error)=>{
            throw new Error(error.response.data.message)
        });
        return res.data
    },

    getRoomState : async(roomCode:string) : Promise<Room>=>{
        const res = await lobbyApiAxios.get(`${base_rest_uri}/availability`,{
            params: {roomCode}
        }).catch((error)=>{
            throw new Error(error.response.data.message)
        });
        return res.data;
    },

    startPrivateGame : async(roomCode:string) : Promise<Room> =>{
        const res = await lobbyApiAxios.post(`${base_rest_uri}/start-fight/${roomCode}`)
        .catch((error)=>{
            throw new Error(error.response.data.message)
        });
        return res.data;
    }



}  