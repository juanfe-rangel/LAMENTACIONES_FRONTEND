import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./modules/authentication/styles/index.css"; 
import "./modules/Lobby/styles/index.css";

import { LoginPage } from "./modules/authentication/pages/LoginPage";
import { RegisterPage } from "./modules/authentication/pages/RegisterPage";
import { GuestPage } from "./modules/authentication/pages/GuestPage";
import { PlayerDashboard } from "./modules/authentication/components/profile/PlayerDashboard";
import { PrivateRoute } from "./modules/authentication/components/ui/PrivateRoute";
import { LobbyPage } from './modules/Lobby/pages/lobby.tsx';
import { WaitingRoomPage } from "./modules/Lobby/pages/WaitingRoomPage.tsx";

function App() {
  return (
    <BrowserRouter>
      <div className="antialiased">
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/guest" element={<GuestPage />} />
          <Route path="/:username/perfil" element={
            <PrivateRoute>
              <PlayerDashboard />
            </PrivateRoute>
          } />
          <Route path="/profile" element={<Navigate to="/login" replace />} />
          <Route path="/lobby" element={
            <PrivateRoute>
              <LobbyPage />
            </PrivateRoute>
          } />
          <Route path="/waiting-room" element={
            <PrivateRoute>
              <WaitingRoomPage />
            </PrivateRoute>
          } />
          <Route path="*" element={<div className="text-white p-10">404 - Not Found</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;