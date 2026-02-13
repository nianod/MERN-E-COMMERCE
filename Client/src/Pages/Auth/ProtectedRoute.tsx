import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import axios from "axios";

const ProtectedRoute = () => {
  const [isValid, setIsValid] = useState<boolean | null>(null);

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return setIsValid(false);
        const apiUrl = import.meta.env.HEROKU_URL
        const res = await axios.get(`${apiUrl}|/api/auth/protected`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setIsValid(res.status === 200);
      } catch {
        setIsValid(false);
      }
    };
    verifyToken();
  }, []);

  if (isValid === null) return <p>Loading...</p>;
  if (!isValid) return <Navigate to="/login" replace />;

  return <Outlet />;
};

export default ProtectedRoute;
