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
    <div className="w-full flex justify-between max-lg:flex-col-reverse">
      <div className="w-[70%] max-lg:w-[100%]">
        {posts ? (
          posts.map((post) => <Post key={post._id} post={post} />)
        ) : (
          <>
            <div class="skeleton-loader mt-5 mb-[20px]">
              <div class="skeleton-line w-[25%] mb-[20px]"></div>
              <div class="skeleton-line mb-[20px]"></div>
              <div class="skeleton-line"></div>
            </div>
            <div class="skeleton-loader mb-[20px]">
              <div class="skeleton-line w-[25%] mb-[20px]"></div>
              <div class="skeleton-line mb-[20px]"></div>
              <div class="skeleton-line"></div>
            </div>
            <div class="skeleton-loader">
              <div class="skeleton-line w-[25%] mb-[20px]"></div>
              <div class="skeleton-line mb-[20px]"></div>
              <div class="skeleton-line"></div>
            </div>
          </>
        )}
      </div>
      <AddPost />
    </div>
  );
};

export default Home;
