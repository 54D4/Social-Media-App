import LoginForm from "@/components/composited/LoginForm";
import React from "react";

const page = () => {
  return (
    <div className="flex w-full h-[100vh] overflow-hidden justify-center items-center drop-shadow-xl">
      <LoginForm />
    </div>
  );
};

export default page;
