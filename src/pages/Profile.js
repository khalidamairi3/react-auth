import React from "react";
import { useAuth } from "../providers/AuthProvider";

const Profile = () => {
  const { user } = useAuth();
  return (
    <>
      <div>Profile</div>
      {user.email}
    </>
  );
};

export default Profile;