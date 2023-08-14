import React from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { usePostContext } from "../hooks/usePostContext";

const RemoveBtn = ({ id }) => {
  const { dispatch } = usePostContext();
  const removePost = async () => {
    const confirm = window.confirm(
      "Are you sure you want to delete this post?"
    );

    if (confirm) {
      const response = await fetch(`http://localhost:4000/api/posts/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        dispatch({ type: "REMOVE_POST", payload: id });
      }
    }
  };
  return (
    <div className="text-red-500 ml-1 cursor-pointer" onClick={removePost}>
      <HiOutlineTrash size={24} />
    </div>
  );
};

export default RemoveBtn;
