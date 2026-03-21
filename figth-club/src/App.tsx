import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


import "./modules/authentication/styles/index.css"; 
import "./modules/Lobby/styles/index.css"


import { LoginPage } from "./modules/authentication/pages/LoginPage";
import { RegisterPage } from "./modules/authentication/pages/RegisterPage";
import { GuestPage } from "./modules/authentication/pages/GuestPage";
import { PlayerDashboard } from "./modules/authentication/components/profile/PlayerDashboard";
import { LobbyPage } from './modules/Lobby/pages/lobby.tsx';
import { PrivateRoute } from "./modules/authentication/components/ui/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <div className="antialiased">
        <Routes>
          {/* Al entrar a la raíz, redirige al login */}
          <Route path="/" element={<Navigate to="/login" replace />}/>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/guest" element={<GuestPage />} />
          {/* Ruta amigable */}
          <Route path="/:username/perfil" element={
            <PrivateRoute>
              <PlayerDashboard />
            </PrivateRoute>
          } />
          {/* Redirect legacy */}
          <Route path="/profile" element={<Navigate to="/login" replace />} />
          <Route path="/lobby" element={<LobbyPage />} />
          {/* 404 por si escribes mal la URL */}
          <Route path="*" element={<div className="text-white p-10">404 - Not Found</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;