import AddPost from "./add-post";
import PostList from "./post-list";
import { useState } from "react";
import { useToast } from "../hook/toast/use-toast";

const Main = () => {
  const [posts, setPosts] = useState([]);
  const toast = useToast();
  const addPost = (content) => {
    if (content === "") {
      toast.error("Nội dung không được để trống!");
      return;
    }
    if (posts.length > 0 && posts.find((post) => post.content === content)) {
      toast.error("Nội dung đã tồn tại!");
      return;
    }
    let post = {
      content: content,
      isEdit: false
    };
    let newPosts = posts.length === 0 ? [post] : [...posts, post];
    setPosts(newPosts);
    toast.success("Thêm ghi chú thành công!");
  };
  return (
    <>
      <h1>TODO APP</h1>
      <AddPost addPost={addPost} />
      <PostList posts={posts} setPosts={setPosts} />
    </>
  );
};

export default Main;
