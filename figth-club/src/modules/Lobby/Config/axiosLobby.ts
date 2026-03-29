import axios from 'axios';
import type { Room } from '../Types/RoomTypes';


const lobbyApiAxios = axios.create({
    baseURL: "http://localhost:8080",
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
    }
}  