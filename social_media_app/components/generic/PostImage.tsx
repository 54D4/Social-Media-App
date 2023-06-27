import Image from "next/image";

const PostImage = ({ src }: { src: string }) => {
  return (
    <Image
      alt="img"
      width={300}
      height={300}
      src={src}
      className="flex bg-gray-400 text-4xl justify-center items-center  rounded-t-xl text-gray-700"
    />
  );
};

export default PostImage;
