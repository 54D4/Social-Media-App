import React from "react";
import UserProfile from "../generic/UserProfile";
import UserInformation from "../generic/UserInformation";

const UserSettingHeader = () => {
  return (
    <div className="flex justify-evenly items-center ">
      <UserProfile />
      <UserInformation />
    </div>
  );
};

export default UserSettingHeader;
