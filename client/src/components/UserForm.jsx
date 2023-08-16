import React from "react";
import { BeatLoader } from "react-spinners";

const UserForm = ({
  handleSubmit,
  username,
  setUsername,
  password,
  setPassword,
  formType,
  error,
  isLoading,
}) => {
  return (
    <div className="flex flex-col mt-5 items-center">
      <div className="w-[50%] max-lg:w-[70%] p-6 bg-white rounded shadow-md">
        <h2 className="text-3xl max-lg:text-2xl font-semibold mb-4">
          {formType}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="user-form-label">Username</label>
            <input
              className={`${error ? "error" : ""} user-form-input`}
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="user-form-label">Password</label>
            <input
              className={`${error ? "error" : ""} user-form-input`}
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {isLoading ? (
            <div className="w-full flex justify-center">
              <div className="">
                <BeatLoader color={"#1a83ac"} size={10} loading={true} />
              </div>
            </div>
          ) : (
            <button
              disabled={isLoading}
              className="w-full primary-btn text-lg max-lg:text-base"
              type="submit"
            >
              {formType}
            </button>
          )}
        </form>
        <div className="bg-white mt-5 rounded">
          <p className="underline">
            If you would like to just demo, LOGIN with below
          </p>
          <p>Name: Demo</p>
          <p>Password: Demo2029!</p>
        </div>
      </div>
      {error && <div className="error w-[50%] max-lg:w-[70%]">{error}</div>}
    </div>
  );
};

export default UserForm;
