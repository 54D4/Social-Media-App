"use client";
const ClientButton = ({
  name,
  clickHandler,
}: {
  name: string;
  clickHandler: Function;
}) => {
  return (
    <button
      className="px-3 mx-10 py-1 bg-blue-400 rounded-xl drop-shadow-lg"
      onClick={() => clickHandler}
    >
      {name}
    </button>
  );
};

export default ClientButton;
