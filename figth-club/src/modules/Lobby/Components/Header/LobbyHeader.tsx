import React from 'react';
import { ProfileButton } from './ProfileButtom';
import { FriendsButton } from './FriendButton';
import { NotificationsButton } from './NotificationButton';
import { ConfigurationButton } from './ConfigButton';



export const LobbyHeader: React.FC  = () =>{
    return(
        <nav>
            <header className="flex justify-between items-center w-full px-6 h-16 bg-stone-950/90 backdrop-blur-xl sticky top-0 z-50 border-b border-stone-800">
                <ProfileButton />
                <span className="hidden lg:flex items-center gap-8">
                    <strong className="font-['Space_Grotesk'] uppercase tracking-widest text-sm font-bold text-orange-500 border-b-2 border-orange-600 pb-1">Lobby</strong>
                    </span>
                <nav className="flex items-center gap-2">
                    <FriendsButton />
                    <NotificationsButton />
                    <ConfigurationButton />
                </nav>
                
            </header>
        </nav>
    );
}