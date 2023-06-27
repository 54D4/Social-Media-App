import PostDescription from "../generic/PostDescription";
import PostImage from "../generic/PostImage";

const Post = () => {
  return (
    <div className="flex flex-col">
      <PostImage src="/exampleImg.jpg" />
      <PostDescription title="Test" description="test" />
    </div>
  );
};

export default Post;
