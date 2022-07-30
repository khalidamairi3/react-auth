import React from "react";
import { useAuth } from "../providers/AuthProvider";
import {Link} from "react-router-dom";

const Home = () => {
  const { user } = useAuth();
  return (
    <>
      <div>Home</div>
      <button>Logout</button>
      <br />
      <Link to="/profile"> Profile </Link>
      <br />
      {user ? user.email : "User not set"}
    </>
  );
};

export default Home;
