import Image from "next/image";

const UserProfile = () => {
  return (
    <div className=" rounded-full">
      <Image
        width={300}
        height={300}
        src={"/profile.jpg"}
        alt="Profile"
        className="m-10 rounded-[50%]  "
      />
    </div>
  );
};

export default UserProfile;
