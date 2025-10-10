import React from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const { postId } = useParams();
  return <h1>Post Page - ID: {postId}</h1>;
};

export default Post;
