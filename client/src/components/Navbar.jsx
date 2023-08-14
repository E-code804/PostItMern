import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-white">
      <div className="max-w-[1440px] my-0 mx-auto py-[50px] px-[20px] flex items-center justify-between">
        <Link to="/">
          <h1 className="text-4xl font-semibold">Username</h1>
        </Link>

        <nav className="flex">
          <button className="mr-2 text-lg logout">Log out</button>

          <div className="mr-2">
            <button className="mr-2 text-lg login">
              <Link to="/login">Log in</Link>
            </button>
            <button className="signup text-lg">Sign up</button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
