import { useOutletContext } from "react-router-dom";
import { PostCard } from "./PostCard";
import importedPostsArray from "../PostArray/PostsArray";

export function Posts() {
  const { searchTerm } = useOutletContext();

  const filteredPosts = importedPostsArray.filter(
    (post) =>
      post.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.post.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const postData = filteredPosts.map((item) => (
    <PostCard
      key={item.key}
      userName={item.userName}
      category={item.category}
      post={item.post}
    />
  ));

  return <div>{postData}</div>;
}
