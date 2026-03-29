import React from 'react';
import { LobbyHeader } from '../Components/Header/LobbyHeader';

import { CharacterContainer } from '../Components/LeftSideBar/CharacterContainer';
import { RightSideBar } from '../Components/RigthSideBar/RightSideBar';

export const LobbyPage : React.FC = () =>{
    return(
        <div className="bg-surface text-on-surface">
            <LobbyHeader />

            <main className="flex h-[calc(100vh-64px)] overflow-hidden">
                <div className="flex-1 flex flex-col md:flex-row p-6 lg:p-12 gap-12 bg-surface max-w-[1440px] mx-auto w-full">
                    <CharacterContainer />
                    <RightSideBar />
                </div>
            </main>
        </div>
    );
}