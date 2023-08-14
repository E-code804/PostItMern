import { useState } from "react";
import UserForm from "../components/UserForm";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("error");
    console.log(username, password, "Login");
  };

  return (
    <UserForm
      handleSubmit={handleSubmit}
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      formType="Login"
      error={error}
    />
  );
};

export default Login;
