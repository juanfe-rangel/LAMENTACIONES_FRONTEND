import React from 'react';


export const ProfileButton : React.FC = () =>{
    return(
        <div className="flex items-center gap-4 cursor-pointer group">
            <button className="relative">
                <img className="w-10 h-10 rounded-full border-2 border-primary-container group-hover:border-secondary transition-colors">
                </img>
            </button>
            <div className="flex flex-col">
                <span className="font-headline text-sm font-bold tracking-widest uppercase text-on-surface">
                    Usuario
                </span>
            </div>
        </div>
    );
}