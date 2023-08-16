import { useState } from "react";
import { url } from "../backendURL";
import { usePostContext } from "../hooks/usePostContext";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const { dispatch } = usePostContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const post = { title, description };
    const response = await fetch(url + "/api/posts", {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    } else {
      setTitle("");
      setDescription("");
      setError("");
      dispatch({ type: "ADD_POST", payload: json });
    }
  };

  return (
    <form className="w-[25%] max-lg:w-[70%]" onSubmit={handleSubmit}>
      <h3 className="form-h3">Add a New Post</h3>

      <label className="text-lg max-sm:text-base">Title:</label>
      <input
        type="text"
        placeholder="Enter title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className={`shadow-md ${error !== "" ? "error" : ""}`}
      />

      <label className="text-lg max-sm:text-base">Description:</label>
      <input
        type="text"
        placeholder="Enter post description"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className={`shadow-md ${error !== "" ? "error" : ""}`}
      />

      <button className="text-lg max-sm:text-base">Add Post</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default AddPost;
