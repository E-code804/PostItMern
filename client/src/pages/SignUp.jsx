import { useState } from "react";
import UserForm from "../components/UserForm";
import { useSignUp } from "../hooks/useSignUp";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { signUp, error, isLoading } = useSignUp();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUp(username, password);
  };

  return (
    <UserForm
      handleSubmit={handleSubmit}
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      formType="Sign up"
      error={error}
      isLoading={isLoading}
    />
  );
};

export default SignUp;
