import IconLink from "../generic/IconLink";
import Logo from "../generic/Logo";
import Serch from "../generic/Serch";

const Header = () => {
  return (
    <div className="flex p-4 justify-between border ">
      <div className="flex">
        <Logo />
        <Serch />
      </div>
      <div className="flex">
        <IconLink src={"/home.png"} />
        <IconLink src={"/user.png"} />
        <IconLink src={"/notification.png"} />
      </div>
    </div>
  );
};

export default Header;
