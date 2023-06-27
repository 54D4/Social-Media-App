import Image from "next/image";

const ProfileImage = ({ src }: { src: string }) => {
  return (
    <Image
      width={75}
      height={0}
      alt="prof"
      src={src}
      className=" rounded-[100%]"
    />
  );
};

export default ProfileImage;
