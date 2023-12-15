import express from "express";
import {getPosts, createPost} from "../controllers/posts.js";

const router = express.Router();

//Defining all the Routes and their controllers
router.get("/", getPosts); //get all posts
router.post("/create", createPost); //create a post

export default router;
