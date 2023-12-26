import * as api from "../api";

// Thunk action creator
export const getPosts = () => async dispatch => {
  try {
    const {data} = await api.fetchPosts();
    // console.log(data);
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

export const updatePost = (postId, postData) => async dispatch => {
  try {
    const {data} = await api.updatePost(postId, postData);
    // console.log(data);
    dispatch({type: "UPDATE", payload: data});
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = postId => async dispatch => {
  try {
    const {data} = await api.deletePost(postId);
    // console.log(data);
    dispatch({type: "DELETE", payload: data});
  } catch (error) {
    console.log(error);
  }
};

export const likePost = postId => async dispatch => {
  try {
    const {data} = await api.likedPost(postId);
    // console.log(data);
    dispatch({type: "UPDATE", payload: data});
  } catch (err) {
    console.log(err);
  }
};
