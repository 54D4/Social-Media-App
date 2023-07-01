import UserSettingBody from "@/components/composited/UserSettingBody";
import UserSettingFooter from "@/components/composited/UserSettingFooter";
import UserSettingHeader from "@/components/composited/UserSettingHeader";

const page = () => {
  return (
    <div className="flex w-full justify-center items-center  h-[90vh] overflow-hidden">
      <div className="w-[80%] py-20 border rounded-xl drop-shadow-xl ">
        <UserSettingHeader />
        <UserSettingBody />
        <UserSettingFooter />
      </div>
    </div>
  );
};

export default page;
