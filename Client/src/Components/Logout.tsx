import React from "react";
import { LogOut } from "lucide-react";

type LogoutProps = {
  leave: boolean;
  setLeave: React.Dispatch<React.SetStateAction<boolean>>;
};

const Logout: React.FC<LogoutProps> = ({ leave, setLeave }) => {
  const handleLogout = () => {
    localStorage.removeItem("token");  
    window.location.href = "/login";  
  };

  return (
    <>
      {leave && (
        <>
        
          <div
            onClick={() => setLeave(false)}
            className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm"
          ></div>

        
          <div className="fixed top-17 right-4 z-50 bg-white shadow-lg rounded-xl p-3 w-40">
             <div className="font-semibold flex flex-col justify-center gap-4">
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 flex items-center gap-2 cursor-pointer rounded-lg hover:bg-red-700 transition"
              >
                <LogOut /> Logout
              </button>
              <button
                onClick={() => setLeave(false)}
                className="border cursor-pointer  border-gray-400 px-4 py-2 rounded-lg hover:bg-gray-100 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Logout;
