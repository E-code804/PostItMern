import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { url } from "../backendURL";
import EditPostForm from "../components/EditPostForm";
import { useAuthContext } from "../hooks/useAuthContext";

const EditPost = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`${url}/api/posts/${id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();

      if (response.ok) {
        setTitle(json.title);
        setDescription(json.description);
      } else {
        throw new Error(response.statusText);
      }
    };

    if (user) {
      fetchPost();
    }
  }, [id, user]);

  return (
    <>
      {title !== "" ? (
        <EditPostForm id={id} title={title} description={description} />
      ) : null}
    </>
  );
};

export default EditPost;
