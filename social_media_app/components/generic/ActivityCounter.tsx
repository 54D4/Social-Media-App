import Image from "next/image";

const ActivityCounter = ({ amount, src }: { amount: number; src: string }) => {
  return (
    <div className="flex flex-col items-center">
      <Image width={25} height={25} alt={src} src={src} />
      <h1>{amount}</h1>
    </div>
  );
};

export default ActivityCounter;
