"use client";
const ClientButton = ({
  name,
  clickHandler,
}: {
  name: string;
  clickHandler: any;
}) => {
  return (
    <button
      className="px-3 mx-10 py-1 bg-green-200 rounded-xl drop-shadow-lg"
      onClick={() => clickHandler}
    >
      {name}
    </button>
  );
};

export default ClientButton;
