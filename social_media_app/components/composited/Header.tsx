import IconLink from "../generic/IconLink";
import Logo from "../generic/Logo";
import Serch from "../generic/Serch";
import Notifications from "./Notifications";

const Header = () => {
  return (
    <div className="flex p-4 justify-between border ">
      <div className="flex">
        <Logo />
        <Serch />
      </div>
      <div className="flex">
        <IconLink href="/" src={"/home.png"} />
        <IconLink href="/user" src={"/user.png"} />
        <Notifications />
        <IconLink href="/" src={"/logout.png"} />
      </div>
    </div>
  );
};

export default Header;
