import React from 'react';

export const CharacterContainer: React.FC  = ()=>{
    return(
        <div className="flex-1 relative flex flex-col justify-end">
            <div className="absolute inset-0 z-0 bg-surface-container-lowest overflow-hidden">
                <img  className="w-full h-full object-cover object-center opacity-60 grayscale hover:grayscale-0 transition-all duration-700 scale-110 hover:scale-100"
                src="https://private-user-images.githubusercontent.com/181153854/455721747-6050502f-34fd-4ba9-91f4-1b4e04a645dd.jpg?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzQwNjM2OTYsIm5iZiI6MTc3NDA2MzM5NiwicGF0aCI6Ii8xODExNTM4NTQvNDU1NzIxNzQ3LTYwNTA1MDJmLTM0ZmQtNGJhOS05MWY0LTFiNGUwNGE2NDVkZC5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwMzIxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDMyMVQwMzIzMTZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1hZTdkMmY2MjJmNTdhYjQ2MDM3ZTljYzdkMmIyOTNmM2JiNjc2OTY1YmI5ZDcxM2RmNWYxYjJiODIyYWQ1MjUzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.AfmFV1G_uaevWBE19v_c5NAinD_LZgax_PqFd7Q0f1U" />
                 
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-surface via-transparent to-transparent" />
            </div>
            <div className="relative z-10 pb-8 pl-8 border-l-4 border-primary-container">
                <h2 className="font-headline text-5xl font-black uppercase tracking-tighter text-on-surface leading-none mb-2"> Zorro  </h2>
                <div className="flex gap-4 mt-6">
                    <div className="bg-surface-container-highest/80 backdrop-blur px-4 py-2 border-r-2 border-secondary">
                        <p className="text-[10px] text-stone-500 uppercase font-bold">Vida</p>
                        <p className="font-headline text-lg">1,250</p>
                    </div>
                    <div className="bg-surface-container-highest/80 backdrop-blur px-4 py-2 border-r-2 border-secondary">
                        <p className="text-[10px] text-stone-500 uppercase font-bold">Daño</p>
                        <p className="font-headline text-lg">1,250</p>
                    </div>
                </div>
            </div>
        </div>
    );
}