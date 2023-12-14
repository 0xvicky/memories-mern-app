import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import postRoutes from "./routes/posts.js";

const app = express();
dotenv.config();
//using the packages with express

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

//using routes
app.use("/posts", postRoutes); //  /posts is the starting point for all the routes of posts

//connecting the real database MONGODB ATLAS
const CONNECTION_URL = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.85ziz05.mongodb.net/?retryWrites=true&w=majority`;

const PORT = (process.env.PORT && process.env.PORT) || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App is running on port:${PORT}`);
    });
  })
  .catch(e => {
    console.log(e);
  });

// mongoose.set("autoIndex", true);
