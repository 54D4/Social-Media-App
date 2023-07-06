import ClientButton from "../generic/ClientButton";
import UserInputReadOnly from "../generic/UserInputReadOnly";

const LoginForm = () => {
  return (
    <div className="py-6 flex flex-col items-center rounded-xl border bg-blue-400">
      <UserInputReadOnly
        name="email"
        value="CatLover@example.com"
        type="email"
      />
      <UserInputReadOnly name="password" value="password123" type="password" />
      <ClientButton name="logIn" clickHandler={console.log("logged")} />
    </div>
  );
};

export default LoginForm;
