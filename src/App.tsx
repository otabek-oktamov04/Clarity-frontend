import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Dashboard } from "./pages/dashboard/dashboard";
import LandingPage from "./pages/landing/landing";
import { useAuth } from "./auth/useAuth";

export default function App() {
  const { isAuthenticated } = useAuth();
  return (
    <BrowserRouter>
      <Routes>
        {!isAuthenticated ? (
          <Route path="/" element={<LandingPage />} />
        ) : (
          <Route path="/" element={<Dashboard />} />
        )}
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
