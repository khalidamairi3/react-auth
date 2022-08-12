import React from "react";
import { useAuth } from "../providers/AuthProvider";
import Meera from "../images/Meera.jpg"
const Profile = () => {
  const { user } = useAuth();
  return (
    <div className="profile">
      <div>Profile</div>
      {user.email}
      <br />
      <img className="profile-image" src={Meera} /> 
    </div>
  );
};

export default Profile;