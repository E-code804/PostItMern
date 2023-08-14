// import { useState } from "react";

const Login = () => {
  //   const [name, setName] = useState("");
  //   const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3 className="font-semibold text-xl">Login</h3>

      <div className="flex flex-col">
        <label className="mb-1">Name</label>
        <input
          type="text"
          className="px-2 py-1 rounded"
          //   onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-1">Password</label>
        <input
          type="password"
          className="px-2 py-1 rounded"
          //   onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="flex">
        <button disabled={false} className="green-bg p-2 text-white rounded">
          Login
        </button>
        {/* {error && <div className="ml-2 error">{error}</div>} */}
      </div>

      <div className="bg-white p-4 my-2 rounded">
        <p>To demo</p>
        <p>Name: Demo</p>
        <p>Password: Demo2029!</p>
      </div>
    </form>
  );
};

export default Login;
