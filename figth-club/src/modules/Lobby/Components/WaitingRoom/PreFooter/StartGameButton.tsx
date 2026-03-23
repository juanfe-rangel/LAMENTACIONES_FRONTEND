import React from 'react';



export const StartGameButton: React.FC = () => {
  return (
      <div className="absolute left-1/2 -translate-x-1/2 w-full max-w-[200px] md:max-w-xs px-2 pointer-events-auto">
          <button className="w-full kinetic-gradient-fuego py-2 md:py-3 font-headline font-bold text-on-primary tracking-[0.15em] md:tracking-[0.2rem] uppercase text-xs md:text-sm shadow-[0_10px_30px_rgba(255,86,38,0.3)] active:scale-[0.98] transition-all cursor-pointer rounded-[14px] md:rounded-[18px]">
              Comenzar Juego
          </button>
      </div>
  );
}
