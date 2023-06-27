import Link from "next/link";
import Image from "next/image";

const IconLink = ({ src }: { src: string }) => {
  return (
    <Link href={"/"}>
      <Image src={src} width={35} height={35} alt="img" className="mx-4" />
    </Link>
  );
};

export default IconLink;
