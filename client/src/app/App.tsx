import React, { useEffect, useState } from "react";
import { DashboardPage } from "../pages/dashboard/DashboardPage";

export const App: React.FC = () => {
  // Optional: backend ping for testing
  const [backendMessage, setBackendMessage] = useState("");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/ping`)
      .then((res) => res.json())
      .then((data) => setBackendMessage(data.message))
      .catch(() => setBackendMessage("Backend not reachable"));
  }, []);

  return (
    <div className="min-h-screen bg-[#0B111B]">
      {/* You can uncomment this for testing */}
      {/* <div className="p-4 text-white font-semibold text-center">
        {backendMessage || "Connecting to backend..."}
      </div> */}

      {/* Dashboard UI */}
      <DashboardPage />
    </div>
  );
};
