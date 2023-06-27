import ProfileImage from "./ProfileImage";

const PostDescription = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex justify-between w-full border p-4 rounded-b-xl ">
      <div className="flex flex-col">
        <h1 className="text-lg font-bold">{title}</h1>
        <p className="text-sm">{description}</p>
      </div>
      <ProfileImage src="/profile.jpg" />
    </div>
  );
};

export default PostDescription;
