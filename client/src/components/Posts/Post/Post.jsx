import React from "react";
import useStyles from "./style";
import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Button,
  Typography
} from "@material-ui/core";
import {MdThumbUp} from "react-icons/md";
import {AiFillDelete} from "react-icons/ai";
import {HiDotsHorizontal} from "react-icons/hi";
// import moment from "moment";
import {getTimeAgo} from "../../../utils/elapsedTime";

const Post = ({post, setCurrentId, setEditPost}) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={post.selectedFile}
        title={post.title}
      />
      <div className={classes.overlay}>
        <Typography variant='h6'>{post.creator}</Typography>
        <Typography variant='body2'>{getTimeAgo(post.createdAt)}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          style={{color: "white"}}
          size='small'
          onClick={() => {
            setCurrentId(post._id);
            setEditPost(post);
          }}>
          <HiDotsHorizontal fontSize={28} />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography
          variant='body2'
          color='textSecondary'>
          {post.tags.map(tag => `#${tag}`)}
        </Typography>
      </div>
      <CardContent>
        <Typography
          className={classes.title}
          variant='h5'
          gutterBottom>
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          size='small'
          color='primary'
          onClick={() => {}}>
          <MdThumbUp fontSize={28} />
          Like
          {post.likeCount}
        </Button>
        <Button
          size='small'
          color='primary'
          onClick={() => {}}>
          <AiFillDelete fontSize={28} />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
