import React, {useEffect, useState} from "react";
import {Container, AppBar, Typography, Grow, Grid} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {getPosts} from "./actions/posts";

import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import {memory1} from "./assets";
import useStyles from "./style";

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const [editPost, setEditPost] = useState(null);

  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  console.log(currentId);
  return (
    <Container maxWidth='lg'>
      <AppBar
        className={classes.appBar}
        position='static'
        color='inherit'>
        <Typography
          className={classes.heading}
          variant='h2'
          align='center'>
          Memories
        </Typography>
        <img
          className={classes.image}
          src={memory1}
          alt='memories'
          height='60'
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent='space-between'
            alignItems='stretch'
            spacing={3}>
            <Grid
              item
              xs={12}
              sm={7}>
              <Posts
                setCurrentId={setCurrentId}
                setEditPost={setEditPost}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}>
              <Form
                currentId={currentId}
                setCurrentId={setCurrentId}
                editPost={editPost}
              />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
