import React from "react";

import { getData } from "@/lib/getData";
import dynamic from "next/dynamic";
const Main = async () => {
  const data = await getData();
  console.log(data);
  const LazyLoading = dynamic(() => import("./Post"));
  return (
    <div className="flex w-full flex-col items-center my-5">
      {data.map((e: any) => (
        <LazyLoading
          key={e.id}
          src={e.url}
          likes={100}
          disLikes={20}
          coments={5}
          description="Cute"
        />
      ))}
    </div>
  );
};

export default Main;
