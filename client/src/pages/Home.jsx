import { useEffect } from "react";
import { url } from "../backendURL";
import AddPost from "../components/AddPost";
import Post from "../components/Post";
import { useAuthContext } from "../hooks/useAuthContext";
import { usePostContext } from "../hooks/usePostContext";

const Home = () => {
  const { posts, dispatch } = usePostContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(url + "/api/posts", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      if (!response.ok) {
        throw Error("Could not fetch posts");
      }

      const json = await response.json();
      dispatch({ type: "SET_POSTS", payload: json });
    };

    if (user) {
      fetchPosts();
    }
  }, [dispatch, user]);
  return (
    <div className="max-w-[1000px] mx-auto flex justify-between max-lg:flex-col-reverse">
      <div className="w-[70%] max-lg:w-[100%]">
        {posts ? (
          posts.map((post) => <Post key={post._id} post={post} />)
        ) : (
          <>
            <div className="skeleton-loader w-full mt-5 mb-[20px]">
              <div className="skeleton-line w-[25%] mb-[20px]"></div>
              <div className="skeleton-line mb-[20px]"></div>
              <div className="skeleton-line"></div>
            </div>
            <div className="skeleton-loader w-full mb-[20px]">
              <div className="skeleton-line w-[25%] mb-[20px]"></div>
              <div className="skeleton-line mb-[20px]"></div>
              <div className="skeleton-line"></div>
            </div>
            <div className="skeleton-loader w-full">
              <div className="skeleton-line w-[25%] mb-[20px]"></div>
              <div className="skeleton-line mb-[20px]"></div>
              <div className="skeleton-line"></div>
            </div>
          </>
        )}
      </div>
      <AddPost />
    </div>
  );
};

export default Home;
