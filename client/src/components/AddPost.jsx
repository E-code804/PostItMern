import { useState } from "react";
import { usePostContext } from "../hooks/usePostContext";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescriptiont] = useState("");
  const [error, setError] = useState("");
  const { dispatch } = usePostContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const post = { title, description };
    const response = await fetch("http://localhost:4000/api/posts", {
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
      setDescriptiont("");
      setError("");
      dispatch({ type: "ADD_POST", payload: json });
    }
  };

  return (
    <form className="w-[25%] max-lg:w-[70%]" onSubmit={handleSubmit}>
      <h3 className="text-2xl font-semibold mb-5 mt-[20px]">Add a New Post</h3>

      <label className="text-lg">Title:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className={`shadow-md ${error !== "" ? "error" : ""}`}
      />

      <label className="text-lg">Content:</label>
      <input
        type="text"
        onChange={(e) => setDescriptiont(e.target.value)}
        value={description}
        className={`shadow-md ${error !== "" ? "error" : ""}`}
      />

      <button className="text-lg">Add Post</button>
      {error && <div className="error">{error}</div>}
    </form>
    // <form
    //   className="w-[50%] bg-white p-5 rounded my-0 mx-auto shadow-sm"
    //   onSubmit={handleSubmit}
    // >
    //   <h3 className="text-2xl font-semibold text-primary mb-2">
    //     Add a New Post
    //   </h3>

    //   <label className="text-lg">Title:</label>
    //   <input
    //     type="text"
    //     onChange={(e) => setTitle(e.target.value)}
    //     value={title}
    //     className={error !== "" ? "error" : ""}
    //   />

    //   <label className="text-lg">Content:</label>
    //   <input
    //     type="text"
    //     onChange={(e) => setDescriptiont(e.target.value)}
    //     value={description}
    //     className={error !== "" ? "error" : ""}
    //   />

    //   <button className="text-lg">Add Post</button>
    //   {error && <div className="error">{error}</div>}
    // </form>
  );
};

export default AddPost;
