const Notification = ({ title }: { title: string }) => {
  return (
    <div className="flex text-xs justify-between p-1 items-center w-60 border">
      {title}
      <div className="flex w-2 h-2 rounded-full bg-green-400 drop-shadow-lg mx-3"></div>
    </div>
  );
};

export default Notification;
