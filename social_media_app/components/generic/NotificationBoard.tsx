import Notification from "./Notification";

const active = {
  false: "hidden",
  true: "flex flex-col absolute right-0 top-[74px]",
};
const NotificationBoard = ({ not }: { not: boolean }) => {
  return (
    <div className={not ? active.true : active.false}>
      <Notification title="CatLover12 add you to friends" />
      <Notification title="CatLover12 published new post" />
      <Notification title="New Event in your area" />
    </div>
  );
};

export default NotificationBoard;
