import React, {useState, useEffect} from "react";
import {Container, Grow, Grid} from "@material-ui/core";
import Posts from "../Posts/Posts";
import {useDispatch} from "react-redux";
import Form from "../Form/Form";
import {getPosts} from "../../actions/posts";
import {useNavigate} from "react-router-dom";
import {fetchUser} from "../../utils/fetchUser";

const Home = () => {
  const [currentId, setCurrentId] = useState(null);

  const dispatch = useDispatch();
  const user = fetchUser();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch, currentId]);

  useEffect(() => {
    if (!user) {
      navigate("/auth");
    }
  }, [user]);

  // console.log(currentId);
  return (
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
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}>
            <Form
              currentId={currentId}
              setCurrentId={setCurrentId}
            />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
