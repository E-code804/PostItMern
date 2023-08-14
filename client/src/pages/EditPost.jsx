import React from "react";
import { useParams } from "react-router-dom";

const EditPost = () => {
  const { id } = useParams();
  return <div>{id}</div>;
};

export default EditPost;
