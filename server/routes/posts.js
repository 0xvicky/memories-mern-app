import express from "express";
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost
} from "../controllers/posts.js";

const router = express.Router();

//Defining all the Routes and their controllers
router.get("/", getPosts); //get all posts
router.post("/create", createPost); //create a post
router.patch("/:id", updatePost); //to update the post we have to pass the id as the param
router.delete("/:id", deletePost); //To delete the post
router.patch("/:id/likePost", likePost); //function to increement the like of post
export default router;
