import React, {useState, useEffect} from "react";
import useStyles from "./style";
import {TextField, Button, Typography, Paper} from "@material-ui/core";
import FileBase64 from "react-file-base64";
import {useDispatch} from "react-redux";
import {createPost, updatePost} from "../../actions/posts";
import {useSelector} from "react-redux";

const Form = ({currentId, setCurrentId}) => {
  const initialPostData = {
    creator: "",
    title: "",
    message: "",
    tags: [],
    selectedFile: ""
  };
  const [postData, setPostData] = useState(initialPostData);

  const classes = useStyles();
  const dispatch = useDispatch();
  const post = useSelector(state =>
    currentId ? state.posts.find(p => p._id === currentId) : null
  );

  //To update the post
  useEffect(() => {
    if (post) {
      setPostData(post);
    }
  }, [currentId]);

  const handleSubmit = e => {
    e.preventDefault();

    // setPostData(postData);z
    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }
    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setPostData(initialPostData);
  };

  return (
    <Paper className={classes.paper}>
      <form
        action=''
        autoComplete='off'
        noValidate
        className={`${classes.form} ${classes.root}`}
        onSubmit={handleSubmit}>
        <Typography variant='h6'>
          {currentId ? "Edit the Memory" : "Creating a Memory"}
        </Typography>
        <TextField
          name='Creator'
          variant='outlined'
          label='Creator'
          fullWidth
          value={postData.creator}
          onChange={e => {
            setPostData({...postData, creator: e.target.value});
          }}
        />
        <TextField
          name='Title'
          variant='outlined'
          label='Title'
          fullWidth
          value={postData.title}
          onChange={e => {
            setPostData({...postData, title: e.target.value});
          }}
        />
        <TextField
          name='Message'
          variant='outlined'
          label='Message'
          fullWidth
          value={postData.message}
          onChange={e => {
            setPostData({...postData, message: e.target.value});
          }}
        />
        <TextField
          name='Tags'
          variant='outlined'
          label='Tags'
          fullWidth
          value={postData.tags}
          onChange={e => {
            const inputTags = e.target.value;
            const arrTags = inputTags.split(",").map(tag => tag.trim()); // Split tags by comma and remove extra spaces

            setPostData({
              ...postData,
              tags: arrTags
            });
          }}
        />

        <div className={classes.fileInput}>
          <FileBase64
            type='file'
            multiple={false}
            onDone={({base64}) => setPostData({...postData, selectedFile: base64})}
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant='contained'
          color='primary'
          size='large'
          type='submit'
          fullWidth>
          Submit
        </Button>
        <Button
          className=''
          variant='contained'
          color='secondary'
          size='small'
          onClick={clear}
          fullWidth>
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
