import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { usePostContext } from "../hooks/usePostContext";

const Navbar = () => {
  const { user, dispatch } = useAuthContext();
  const { dispatch: postDispatch } = usePostContext();

  const handleClick = () => {
    // Deleting from local storage and setting the global user to null.
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
    postDispatch({ type: "SET_POSTS", payload: [] });
  };

  return (
    <header className="bg-white">
      <div className="max-w-[1000px] my-0 mx-auto py-[50px] px-[20px] flex items-center justify-between">
        <Link to="/">
          <h1 className="text-4xl max-sm:text-2xl font-semibold">
            {user ? user.username : ""}
          </h1>
        </Link>

        <nav className="flex">
          {user ? (
            <button
              onClick={handleClick}
              className="mr-2 text-lg max-sm:text-base logout"
            >
              Log out
            </button>
          ) : (
            <div className="mr-2">
              <button className="mr-2 text-xl max-sm:text-base login">
                <Link to="/login">Log in</Link>
              </button>
              <button className="signup text-xl max-sm:text-base">
                <Link to="/signup">Sign up</Link>
              </button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
