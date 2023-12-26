import React from "react";
import Post from "./Post/Post";
import {v4 as uuidv4} from "uuid";
import {CircularProgress, Grid} from "@material-ui/core";
import {Typography} from "@material-ui/core";

import {useSelector} from "react-redux";
import useStyles from "./style";
const Posts = ({setCurrentId}) => {
  const classes = useStyles();
  const posts = useSelector(state => state.posts);
  // console.log(posts);

  return !posts.length ? (
    <Typography variant='h4'>No Post Found !!</Typography>
  ) : (
    <Grid
      className={classes.mainContainer}
      container
      alignItems='stretch'
      spacing={3}>
      {posts.map(post => (
        <Grid
          key={uuidv4()}
          item
          xs={12}
          sm={6}>
          <Post
            post={post}
            setCurrentId={setCurrentId}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
