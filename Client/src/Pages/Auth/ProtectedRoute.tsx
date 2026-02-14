import { useEffect, useState, useCallback } from "react";
import { Navigate, Outlet } from "react-router-dom";
import axios from "axios";

const ProtectedRoute = () => {
  const [isValid, setIsValid] = useState<boolean | null>(null);

  const verifyToken = useCallback(async () => {
    try {
      const token = localStorage.getItem("token");
       
      if (!token) {
        setIsValid(false);
        return;
      }

      const apiUrl = import.meta.env.VITE_HEROKU_URL;
      const res = await axios.get(`${apiUrl}/api/auth/protected`, {  
        headers: { Authorization: `Bearer ${token}` },
      });
      
      setIsValid(res.status === 200);
    } catch (error) {
      
      setIsValid(false);
    }
  }, []);

  useEffect(() => {
    verifyToken();
  }, [verifyToken]);

  if (isValid === null) return <p>Verifying...</p>;
  if (!isValid) return <Navigate to="/login" replace />;

  return <Outlet />;
};

export default ProtectedRoute;

