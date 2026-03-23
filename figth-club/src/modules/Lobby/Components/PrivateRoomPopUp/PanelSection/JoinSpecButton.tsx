import React from "react";

export const JoinSpecButton :React.FC = () =>{
    return(
        <button className="bg-transparent border border-secondary text-secondary font-label font-bold text-xs tracking-[0.15em] uppercase h-14 hover:bg-secondary/10 transition-all flex items-center justify-center gap-2 group  active:scale-[0.98] rounded-[14px] md:rounded-[16px]">
            <span className="material-symbols-outlined group-hover:scale-110 transition-transform">visibility</span>
                Entrar Como Espectador
        </button>
    );
}