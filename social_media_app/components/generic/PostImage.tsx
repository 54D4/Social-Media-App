import Image from "next/image";

const PostImage = ({ src }: { src: string }) => {
  return (
    <Image
      alt="img"
      width={400}
      height={500}
      src={src}
      className="flex bg-gray-400 text-4xl justify-center items-center rounded-xl  text-gray-700"
    />
  );
};

export default PostImage;
