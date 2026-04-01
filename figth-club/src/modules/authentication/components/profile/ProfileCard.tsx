import { useState, useEffect } from 'react';
import { MapPin, Settings, Save, X } from 'lucide-react';
import type { UserProfile } from '../../types/dashboard.types';

interface ProfileCardProps {
    profile: UserProfile | null;
    onUpdate: (newData: Partial<UserProfile>) => Promise<void>;
}

export const ProfileCard = ({ profile, onUpdate }: ProfileCardProps) => {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState<Partial<UserProfile>>({});

    useEffect(() => {
        if (profile) {
            setFormData(profile);
        }
    }, [profile]);

    const handleSave = async () => {
        await onUpdate(formData);
        setIsEditing(false);
    };

    if (!profile && !isEditing) {
        return (
            <div className="lg:col-span-1 bg-[#161616] border border-white/5 rounded-2xl p-6 animate-pulse flex flex-col items-center">
                <div className="w-28 h-28 bg-white/5 rounded-2xl mb-4" />
                <div className="h-6 w-32 bg-white/5 rounded mb-2" />
                <div className="h-4 w-24 bg-white/5 rounded" />
            </div>
        );
    }

    return (
        <div className="lg:col-span-1 bg-[#161616] border border-white/5 rounded-2xl p-6 relative overflow-hidden group shadow-2xl">
            {/* Botón de Ajustes */}
            <button 
                onClick={() => setIsEditing(!isEditing)}
                className="absolute top-4 right-4 z-10 p-2 hover:bg-white/10 rounded-full transition-all duration-300"
                title={isEditing ? "Cancelar" : "Editar Perfil"}
            >
                {isEditing ? (
                    <X size={18} className="text-white/50 hover:text-white" />
                ) : (
                    <Settings size={18} className="text-white/20 group-hover:text-orange-500 transition-colors" />
                )}
            </button>

            {isEditing ? (
                <div className="space-y-4 pt-4 animate-in fade-in zoom-in duration-300">
                    <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-500 mb-2">Editar Guerrero</h3>
                    
                    <div className="space-y-1">
                        <label className="text-[9px] uppercase font-bold text-white/30 ml-1">Nombre de combate</label>
                        <input 
                            className="w-full bg-black border border-white/10 rounded-xl p-3 text-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all"
                            value={formData.username || ''}
                            onChange={(e) => setFormData({...formData, username: e.target.value})}
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="text-[9px] uppercase font-bold text-white/30 ml-1">Manifiesto (Bio)</label>
                        <textarea 
                            className="w-full bg-black border border-white/10 rounded-xl p-3 text-sm h-28 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all resize-none"
                            value={formData.bio || ''}
                            onChange={(e) => setFormData({...formData, bio: e.target.value})}
                        />
                    </div>

                    <button 
                        onClick={handleSave}
                        className="w-full bg-orange-600 hover:bg-orange-500 text-white font-black py-3 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-[0_0_20px_rgba(234,88,12,0.2)] uppercase text-[10px] tracking-widest"
                    >
                        <Save size={14} /> Actualizar Datos
                    </button>
                </div>
            ) : (
                <div className="flex flex-col items-center animate-in fade-in duration-500">
                    {/* Avatar Container */}
                    <div className="relative group/avatar">
                        <div className="w-28 h-28 rounded-2xl border-2 border-orange-500/30 p-1 mb-4 overflow-hidden bg-black transition-transform duration-500 group-hover:scale-105">
                            <img 
                                src={profile?.avatarURL || 'https://via.placeholder.com/150'} 
                                alt="Avatar" 
                                className="w-full h-full object-cover rounded-xl opacity-80 group-hover:opacity-100 transition-opacity" 
                            />
                        </div>
                    </div>

                    <h2 className="text-2xl font-black tracking-tighter uppercase italic text-white drop-shadow-md">
                        {profile?.username || 'Cargando...'}
                    </h2>
                    
                    <div className="flex items-center gap-2 text-white/40 text-[10px] mt-2 uppercase tracking-[0.2em] font-bold">
                        <MapPin size={12} className="text-orange-500" />
                        {profile?.city || 'SECTOR'}, {profile?.country || 'NA'}
                    </div>

                    <div className="w-full mt-6 border-t border-white/5 pt-4">
                        <p className="text-center text-sm text-white/50 italic leading-relaxed px-2">
                            "{profile?.bio || 'Sin manifiesto de combate...'}"
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};