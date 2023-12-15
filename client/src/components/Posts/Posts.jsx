import React from "react";
import Post from "./Post/Post";
import useStyles from "./style";
const Posts = () => {
  const classes = useStyles();
  return (
    <div>
      <Post />
      <Post />
    </div>
  );
};

export default Posts;
