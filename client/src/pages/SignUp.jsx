import { useState } from "react";
import UserForm from "../components/UserForm";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("error!");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("error!");
    console.log(username, password, "signup");
  };

  return (
    <UserForm
      handleSubmit={handleSubmit}
      setUsername={setUsername}
      setPassword={setPassword}
      formType="Sign up"
      error={error}
    />
  );
};

export default SignUp;
