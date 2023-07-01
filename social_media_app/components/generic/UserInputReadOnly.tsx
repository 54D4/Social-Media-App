interface UserInforamtion {
  name: string;
  value: string;
  type: string;
}

const UserInputReadOnly = ({ name, value, type }: UserInforamtion) => {
  return (
    <div className="flex flex-col mx-10 ">
      <label htmlFor={name} className=" text-lg">
        {name}
      </label>
      <input
        readOnly
        className="border my-4 p-1"
        id={name}
        value={value}
        type={type}
      />
    </div>
  );
};

export default UserInputReadOnly;
