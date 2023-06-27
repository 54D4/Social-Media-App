import Image from "next/image";

const ProfileImage = ({ src }: { src: string }) => {
  return (
    <Image
      width={50}
      height={25}
      alt="prof"
      src={src}
      className=" rounded-[100%]"
    />
  );
};

export default ProfileImage;
