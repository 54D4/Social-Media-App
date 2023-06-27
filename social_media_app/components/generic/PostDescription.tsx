import ProfileImage from "./ProfileImage";

const PostDescription = ({ description }: { description: string }) => {
  return (
    <div className=" p-4 flex justify-between ">
      <div className="flex justify-center items-center">
        <p>{description}</p>
      </div>
      <ProfileImage src="/profile.jpg" />
    </div>
  );
};

export default PostDescription;
