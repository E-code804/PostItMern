import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { url } from "../backendURL";
import { useAuthContext } from "../hooks/useAuthContext";

const EditPostForm = ({ id, title, description }) => {
  const [error, setError] = useState("");
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const navigate = useNavigate();
  const { user } = useAuthContext();

  const handleCancel = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError("You must be logged in to edit a post.");
      return;
    }

    try {
      const response = await fetch(`${url}/api/posts/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          title: newTitle,
          description: newDescription,
        }),
      });
      const json = await response.json();

      if (!response.ok) {
        setError(json.error);
      } else {
        navigate("/");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[50%] rounded my-5 mx-auto max-lg:w-[70%] bg-white py-6 px-5"
    >
      <h3 className="form-h3">Update your post</h3>

      <label className="text-lg">Title:</label>
      <input
        type="text"
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        className={`border border-black ${error !== "" ? "error" : ""}`}
      />

      <label className="text-lg">Content:</label>
      <input
        type="text"
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
        className={`border border-black ${error !== "" ? "error" : ""}`}
      />

      <button className="text-lg">Update Post</button>
      <button
        onClick={(e) => handleCancel(e)}
        className="text-lg ml-2 bg-red-600 hover:bg-red-800"
      >
        Cancel
      </button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default EditPostForm;
