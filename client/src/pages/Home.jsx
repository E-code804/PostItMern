import { useEffect } from "react";
import { url } from "../backendURL";
import AddPost from "../components/AddPost";
import Post from "../components/Post";
import { usePostContext } from "../hooks/usePostContext";

const Home = () => {
  const { posts, dispatch } = usePostContext();

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(url + "/api/posts");

      if (!response.ok) {
        throw Error("Could not fetch posts");
      }

      const json = await response.json();
      dispatch({ type: "SET_POSTS", payload: json });
    };

    fetchPosts();
  }, [dispatch]);
  return (
    <div className="w-full flex justify-between max-lg:flex-col-reverse">
      <div className="w-[70%] max-lg:w-[100%]">
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
      <AddPost />
    </div>
  );
};

export default Home;
