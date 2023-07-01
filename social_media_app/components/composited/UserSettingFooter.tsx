"use client";
import ClientButton from "../generic/ClientButton";

const UserSettingFooter = () => {
  return (
    <footer className=" flex justify-center my-8 ">
      <ClientButton
        name="Edit Profile"
        clickHandler={() => console.log("Edit")}
      />
      <ClientButton
        name="SingOut"
        clickHandler={() => console.log("SingOut")}
      />
    </footer>
  );
};

export default UserSettingFooter;
