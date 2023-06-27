"use client";
import { useState } from "react";
import NotificationButton from "../generic/NotificationButton";
import NotificationBoard from "../generic/NotificationBoard";

const Notifications = () => {
  const [not, setNot] = useState<boolean>(false);
  return (
    <div>
      <NotificationButton not={not} setNot={setNot} />
      <NotificationBoard not={not} />
    </div>
  );
};

export default Notifications;
