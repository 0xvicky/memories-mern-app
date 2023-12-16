import * as api from "../api";

// Thunk action creator
export const getPosts = () => async dispatch => {
  try {
    const {data} = await api.fetchPosts();
    dispatch({type: "FETCH_ALL", payload: data});
  } catch (error) {
    console.log(error);
    // You might want to dispatch an error action here if needed
  }
};

export const createPost = post => async dispatch => {
  try {
    const {data} = await api.createPost(post);
    dispatch({type: "CREATE", payload: data});
  } catch (error) {
    console.log(error);
  }
};
