import axios from "axios";

const url = "http://localhost:5000/posts";

export const fetchPosts = () => axios.get(url);
export const createPost = postData => axios.post(url + "/create", postData);
export const updatePost = postId => axios.patch(`url/update/${postId}`);
