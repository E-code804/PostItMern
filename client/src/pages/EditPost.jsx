import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { url } from "../backendURL";
import EditPostForm from "../components/EditPostForm";

const EditPost = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`${url}/api/posts/${id}`);
      const json = await response.json();

      if (response.ok) {
        setTitle(json.title);
        setDescription(json.description);
      } else {
        throw new Error(response.statusText);
      }
    };
    fetchPost();
  }, [id]);

  return (
    <>
      {title !== "" ? (
        <EditPostForm id={id} title={title} description={description} />
      ) : null}
    </>
  );
};

export default EditPost;
