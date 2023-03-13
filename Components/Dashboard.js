import React from "react";
import { useAuth } from "../utils/Auth";

export const Dashboard = () => {
  const auth = useAuth();
  const handleLogout = () => {
    auth.handleLogout();
  };
  return (
    <>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};
