import React from "react";
import UserInputReadOnly from "../generic/UserInputReadOnly";

const UserSettingBody = () => {
  return (
    <div className="flex flex-col justify-center items-center my-6">
      <div className="flex  ">
        <UserInputReadOnly value="Kacepr" type="text" name="Name" />
        <UserInputReadOnly value="Sadowski" type="text" name="LastName" />
      </div>
      <div className="flex ">
        <UserInputReadOnly
          value="CatLover@example.com"
          type="text"
          name="Email"
        />
        <UserInputReadOnly
          value="Password123"
          type="Password"
          name="Password"
        />
      </div>
    </div>
  );
};

export default UserSettingBody;
