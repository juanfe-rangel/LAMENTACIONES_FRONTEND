import React, { useEffect, useState } from 'react';
import { DashboardService } from '../../services/profileService';
import type { UserProfile, UserStats } from '../../types/dashboard.types';

import { StatsCards } from './StatsCards'; 
import { ProfileCard } from './ProfileCard';
import { WinRatePanel } from './WinRatePanel';
import { HistoryPanel } from './HistoryPanel'; 

const DEFAULT_STATS: UserStats = {
    level: 1,
    points: 0,
    streak: 0,
    followers: 0,
    totalFights: 0,
    wins: 0,
    losses: 0,
    draws: 0,
    userId: ''
};

export const PlayerDashboard = () => {
    const [profile, setProfile] = useState<UserProfile | null>(null);
    const [stats, setStats] = useState<UserStats>(DEFAULT_STATS);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const userDataRaw = localStorage.getItem('user_data');
                if (!userDataRaw) return;

                const { userId } = JSON.parse(userDataRaw);
                const { profile: fetchedProfile, stats: fetchedStats } = 
                    await DashboardService.getDashboardData(userId);

                if (fetchedProfile) setProfile(fetchedProfile);
                if (fetchedStats) setStats(fetchedStats);
            } catch (err) {
                console.error("💥 Error en el flujo de datos del Dashboard:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchDashboardData();
    }, []);

    const handleUpdateProfile = async (newData: Partial<UserProfile>) => {
        if (!profile?.userId) return;
        try {
            const updatedProfile = await DashboardService.updateProfile(profile.userId, newData);
            setProfile(updatedProfile);
        } catch (err) {
            console.error("Error al sincronizar cambios de perfil:", err);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-[#0f0e0d] flex items-center justify-center">
                <div className="w-10 h-10 border-t-2 border-orange-500 rounded-full animate-spin" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0f0e0d] text-white p-4 md:p-8 font-sans antialiased selection:bg-orange-500/30">
            <div className="max-w-[1900px] mx-auto space-y-8 animate-in fade-in duration-700">
                
                {/* Header Profesional SaaS */}
                <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/5 pb-8">
                    <div>
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-500/80">
                            Guerrero de la Arena
                        </span>
                        <h1 className="text-5xl font-black text-white uppercase italic tracking-tighter mt-1">
                            Bienvenido, {profile?.username || 'Combatiente'}
                        </h1>
                    </div>

                    <div className="flex items-center gap-4 bg-[#161616] p-4 rounded-2xl border border-white/5 shadow-2xl">
                        <div className="bg-orange-600/20 text-orange-500 px-4 py-2 rounded-xl text-xs font-black tracking-widest uppercase border border-orange-500/20 shadow-[0_0_20px_rgba(234,88,12,0.15)]">
                            LVL {stats.level}
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Global Pts</span>
                            <span className="text-3xl font-black text-white leading-none">
                                {stats.points.toLocaleString()}
                                <span className="text-xs font-bold text-white/20 ml-2 uppercase">XP</span>
                            </span>
                        </div>
                    </div>
                </header>

                {/* Grid Principal: Bento Layout */}
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-8">

                    {/* Columna Izquierda: Perfil (Ocupa 1 col en LG) */}
                    <div className="lg:col-span-1">
                        <ProfileCard 
                            profile={profile} 
                            onUpdate={handleUpdateProfile} 
                        />
                    </div>

                    {/* Columna Derecha: Contenido Principal (Ocupa 5 cols en LG) */}
                    <div className="md:col-span-3 lg:col-span-5 space-y-8">
                        
                        {/* Fila Superior: Tarjetas de Estadísticas (Racha, Puntos, Seguidores, Combates) */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                            <StatsCards stats={stats} />
                        </div>

                        {/* Fila Inferior: Historial Visual y Tasa de Victorias */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Historial basado en tu captura de 'History' */}
                            <HistoryPanel />

                            {/* Panel de Efectividad con barra de progreso */}
                            <WinRatePanel stats={stats} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};