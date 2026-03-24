import React, { useEffect, useState } from 'react';
import { LobbyHeader } from '../Components/MainLobbyPage/Header/LobbyHeader';

import { CharacterContainer } from '../Components/MainLobbyPage/LeftSideBar/CharacterContainer';
import { RightSideBar } from '../Components/MainLobbyPage/RigthSideBar/RightSideBar';
import type { UserCharacter } from '../Types/characterTypes';

export const LobbyPage : React.FC = () =>{
    const [userName,setUserName] = useState<string>("");
    const [userCharacters,setUserCharacters] = useState<UserCharacter[] | null>(null);


    useEffect(() => {
      const mockUser = {
        userId: "123",
        username: "testUser",
        email: "test@example.com",
        role: "admin"
      };
    
      localStorage.setItem("user_data", JSON.stringify(mockUser));
    }, []);




    useEffect(()=>{
        setUserName("Santiago")
        const userCharactersList: UserCharacter[] = [
            {
              id: "60f1a2b3c4d5e6f7g8h9i0j1",
              user: "usuario123",
              character: {
                characterId: 101,
                characterLevel: 5,
                characterName: "Zorro 1",
                characterHp: "150",
                characterATK: "35",
                characterDEF: "20",
                characterImg:"https://avatars.githubusercontent.com/u/181153854?v=4"
              },
            },
            {
              id: "60f1a2b3c4d5e6f7g8h9i0j1",
              user: "usuario123",
              character: {
                characterId: 101,
                characterLevel: 5,
                characterName: "Zorro 2",
                characterHp: "10",
                characterATK: "350",
                characterDEF: "200",
                characterImg:"https://private-user-images.githubusercontent.com/181153854/455721747-6050502f-34fd-4ba9-91f4-1b4e04a645dd.jpg?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzQwNjM2OTYsIm5iZiI6MTc3NDA2MzM5NiwicGF0aCI6Ii8xODExNTM4NTQvNDU1NzIxNzQ3LTYwNTA1MDJmLTM0ZmQtNGJhOS05MWY0LTFiNGUwNGE2NDVkZC5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwMzIxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDMyMVQwMzIzMTZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1hZTdkMmY2MjJmNTdhYjQ2MDM3ZTljYzdkMmIyOTNmM2JiNjc2OTY1YmI5ZDcxM2RmNWYxYjJiODIyYWQ1MjUzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.AfmFV1G_uaevWBE19v_c5NAinD_LZgax_PqFd7Q0f1U"
              }, 
            }
          ];

        setUserCharacters(userCharactersList)
    },[]);


    return(
        <div className="bg-surface text-on-surface">
            <LobbyHeader  userName={userName}/>

            <main className="flex h-[calc(100vh-64px)] overflow-hidden">
                <div className="flex-1 flex flex-col md:flex-row p-6 lg:p-12 gap-12 bg-surface max-w-[1440px] mx-auto w-full">
                    <CharacterContainer  userCharacters={userCharacters} />
                    <RightSideBar />
                </div>
            </main>
        </div>
    );
}