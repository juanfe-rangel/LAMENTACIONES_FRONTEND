import React, { useEffect, useState } from 'react';
import type { UserCharacter } from '../../../Types/characterTypes';

type props ={
    userCharacters:UserCharacter[] | null
}

export const CharacterContainer: React.FC<props>  = ({userCharacters})=>{
    const[characterScreen,setCharacterScreen] = useState<UserCharacter | null>(null);



    useEffect(() => {
        let i = 0;
        if (!userCharacters || userCharacters.length === 0) return;
        setCharacterScreen(userCharacters[1]);

        const interval = setInterval(() => {
          setCharacterScreen(userCharacters[i]);
          i = (i + 1) % userCharacters!.length;
        }, 5000);
    
        return () => clearInterval(interval); 
      }, [userCharacters]);


    return(
        <div className="flex-1 relative flex flex-col justify-end">
            {characterScreen &&
            <>
                <div className="absolute inset-0 z-0 bg-surface-container-lowest overflow-hidden rounded-[18px]">
                    <img  className="w-full h-full object-cover object-center opacity-60 grayscale hover:grayscale-0 transition-all duration-700 scale-110 hover:scale-100 "
                    src= {characterScreen.character.characterImg} />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-surface via-transparent to-transparent" />
                </div>
                <div className="relative z-10 pb-8 pl-8 border-l-4 border-primary-container">
                    <h2 className="font-headline text-5xl font-black uppercase tracking-tighter text-on-surface leading-none mb-2"> {characterScreen.character.characterName}  </h2>
                    <div className="flex gap-4 mt-6">
                        <div className="bg-surface-container-highest/80 backdrop-blur px-4 py-2 border-r-2 border-secondary">
                            <p className="text-[10px] text-stone-500 uppercase font-bold">Vida</p>
                            <p className="font-headline text-lg">{characterScreen.character.characterHp}</p>
                        </div>
                        <div className="bg-surface-container-highest/80 backdrop-blur px-4 py-2 border-r-2 border-secondary">
                            <p className="text-[10px] text-stone-500 uppercase font-bold">Daño</p>
                            <p className="font-headline text-lg">{characterScreen.character.characterATK}</p>
                        </div>
                    </div>
                </div>
            </>
            }
        </div>
    );
}