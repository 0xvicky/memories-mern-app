import PostMessage from "../models/postMessage.js";
import mongoose from "mongoose";

export const getPosts = async (req, res) => {
  try {
    const postMsg = await PostMessage.find();
    res.status(200).json(postMsg);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post);

  newPost.createdAt = new Date();
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({message: error.message});
  }
};

export const updatePost = async (req, res) => {
  const {id: _id} = req.params;
  const post = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No post with this ID");

  const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {new: true});
  res.json(updatedPost);
};
