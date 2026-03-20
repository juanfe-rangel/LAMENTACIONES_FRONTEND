import { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import authApi from '../../config/axios';
import { SuccessCard } from './SuccessCard'; 
import { useNavigate } from 'react-router-dom'

export const SocialAuth = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSuccess = async (credentialResponse: any) => {
    try {
      const response = await authApi.post('/auth/oauth/google', {
        idToken: credentialResponse.credential 
      });

      if (response.data.accessToken) {
        localStorage.setItem('fight_club_token', response.data.accessToken);
        setIsLoggedIn(true);
      }
    } catch (error: any) {
      console.error("Error en el Arena:", error.response?.status || error.message);
    }
  };

  if (isLoggedIn) {
    return (
      <SuccessCard 
        onConfirm={() => navigate('/profile')} 
      />
    );
  }

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <div className="text-[11px] text-white/40 uppercase tracking-[0.3em] font-black italic">
        O continúa con
      </div>
      
      <div className="bg-white/5 p-2 rounded-lg border border-white/10">
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={() => console.error("Login Failed")}
          useOneTap
          
          theme="filled_black"
          shape="pill"
          ux_mode="popup"
          width="550"
        />
      </div>
    </div>
  );
};