import React, { useEffect, useState } from 'react';
import { LobbyHeader } from '../Components/MainLobbyPage/Header/LobbyHeader';

import { CharacterContainer } from '../Components/MainLobbyPage/LeftSideBar/CharacterContainer';
import { RightSideBar } from '../Components/MainLobbyPage/RigthSideBar/RightSideBar';
import type { UserCharacter } from '../Types/characterTypes';
import { getUserData } from '../Types/localUserData';
import axios from 'axios';

export const LobbyPage : React.FC = () =>{
    const [userName,setUserName] = useState<string>("");
    const [avatarURL, setAvatarURL] = useState<string>("");
    const [userCharacters,setUserCharacters] = useState<UserCharacter[] | null>(null);
    
    useEffect(() => {
      const userData = getUserData(); 
      if (userData) {
        setUserName(userData.username);
      }
      
      const fetchProfile = async () => {
        if (!userData?.userId) return;
        try {
          const token = localStorage.getItem('fight_club_token');
          const res = await axios.get(
            `${import.meta.env.VITE_API_URL}/user-profile/${userData.userId}`,
            { headers: { Authorization: `Bearer ${token}` } }
          );
          if (res.data?.avatarURL) {
            setAvatarURL(res.data.avatarURL);
            localStorage.setItem('player_avatar', res.data.avatarURL);
          }
        } catch (e) {
          console.error("No se pudo cargar el perfil:", e);
        }
      };
      
      fetchProfile();
      
      const userCharactersList: UserCharacter[] = [
        {
          id: "60f1a2b3c4d5e6f7g8h9i0j1",
          user: userData?.username || "usuario",
          character: {
            characterId: 101,
            characterLevel: 5,
            characterName: "Zorro 1",
            characterHp: "150",
            characterATK: "35",
            characterDEF: "20",
            characterImg: "https://avatars.githubusercontent.com/u/181153854?v=4"
          },
        },
        {
          id: "60f1a2b3c4d5e6f7g8h9i0j1",
          user: userData?.username || "usuario",
          character: {
          characterId: 102,
          characterLevel: 5,
          characterName: "Zorro 2",
          characterHp: "10",
          characterATK: "350",
          characterDEF: "200",
          characterImg: "https://avatars.githubusercontent.com/u/181153854?v=4"
        },
      }
    ];
    setUserCharacters(userCharactersList);
  }, []);

    return(
        <div className="bg-surface text-on-surface">
          <LobbyHeader userName={userName} avatarURL={avatarURL}/>

            <main className="flex h-[calc(100vh-64px)] overflow-hidden">
                <div className="flex-1 flex flex-col md:flex-row p-6 lg:p-12 gap-12 bg-surface max-w-[1440px] mx-auto w-full">
                    <CharacterContainer  userCharacters={userCharacters} />
                    <RightSideBar />
                </div>
            </main>
        </div>
    );
}