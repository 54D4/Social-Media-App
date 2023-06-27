import ActivityCounter from "../generic/ActivityCounter";
import PostDescription from "../generic/PostDescription";
import PostImage from "../generic/PostImage";

interface post {
  description: string;
  src: string;
  likes: number;
  disLikes: number;
  coments: number;
}

const Post = ({ description, src, likes, disLikes, coments }: post) => {
  return (
    <div className="flex flex-col my-6 p-4 border rounded-xl drop-shadow-xl">
      <PostDescription description={description} />
      <PostImage src={src} />
      <hr className="w-full h-1 my-2 bg-blue-400 rounded-xl" />
      <div className="flex justify-evenly items-center">
        <ActivityCounter amount={likes} src="/like.png" />
        <ActivityCounter amount={disLikes} src="/dislike.png" />
        <ActivityCounter amount={coments} src="/coment.png" />
      </div>
    </div>
  );
};

export default Post;
