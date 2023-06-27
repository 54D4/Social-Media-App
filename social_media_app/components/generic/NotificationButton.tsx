"use client";

import Image from "next/image";

const NotificationButton = ({
  setNot,
  not,
}: {
  setNot: Function;
  not: boolean;
}) => {
  return (
    <button onClick={() => setNot(!not)}>
      <Image
        src={"/notification.png"}
        width={35}
        height={35}
        alt="img"
        className="mx-4"
      />
    </button>
  );
};

export default NotificationButton;
