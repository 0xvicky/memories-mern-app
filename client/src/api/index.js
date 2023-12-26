import axios from "axios";

const url = "http://localhost:5000/posts";

export const fetchPosts = () => axios.get(url);
export const createPost = postData => axios.post(url + "/create", postData);
export const updatePost = (postId, postData) => axios.patch(`${url}/${postId}`, postData);
export const deletePost = postId => axios.delete(`${url}/${postId}`);
export const likedPost = postId => axios.patch(`${url}/${postId}/likePost`);
