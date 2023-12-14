import express from "express";
import {getPosts} from "../controllers/posts.js";

const router = express.Router();

//Defining all the Routes and their controllers
router.get("/", getPosts);

export default router;
