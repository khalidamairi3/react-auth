import React from "react";
import { useAuth } from "../providers/AuthProvider";

const Home = () => {
  const { user } = useAuth();
  return (
    <>
      <div>Home</div>
      <button>Logout</button>
      {user ? user.email : "User not set"}
    </>
  );
};

export default Home;
