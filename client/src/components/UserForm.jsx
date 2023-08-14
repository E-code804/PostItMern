import React from "react";

const UserForm = ({
  handleSubmit,
  username,
  setUsername,
  password,
  setPassword,
  formType,
  error,
}) => {
  return (
    <div className="flex flex-col items-center bg-gray-100">
      <div className="w-[500px] max-lg:w-3/4 p-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4">{formType}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-2">Username</label>
            <input
              className={`${
                error !== "" ? "error" : ""
              } w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-400`}
              type="text"
              value={username}
              placeholder="Enter your username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-lg font-semibold mb-2">Password</label>
            <input
              className={`${
                error !== "" ? "error" : ""
              } w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-400`}
              type="password"
              value={password}
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="w-full bg-primary text-white py-2 rounded hover:bg-primarydark transition duration-300"
            type="submit"
          >
            {formType}
          </button>
        </form>
        <div className="bg-white mt-5 rounded">
          <p className="underline">
            If you would like to just demo, LOGIN with below
          </p>
          <p>Name: Demo</p>
          <p>Password: Demo2029!</p>
        </div>
      </div>
      <div className={`${error !== "" ? "error" : ""}  w-[500px] max-lg:w-3/4`}>
        {error}
      </div>
    </div>
  );
};

export default UserForm;
