import React, {useState, useEffect} from "react";
import useStyles from "./style";
import {TextField, Button, Typography, Paper} from "@material-ui/core";
import FileBase64 from "react-file-base64";
import {useDispatch} from "react-redux";
import {createPost, updatePost} from "../../actions/posts";

const Form = ({currentId, setCurrentId, editPost}) => {
  const initialPostData = {
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: ""
  };
  const [postData, setPostData] = useState(initialPostData);

  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("update triggereddd effect  ");
    for (let key in editPost) {
      console.log(key);
      if (postData.hasOwnProperty(key)) {
        setPostData({...postData, [key]: editPost[key]});
      }
    }
  }, [currentId, editPost]);

  const handleSubmit = e => {
    e.preventDefault();

    // setPostData(postData);
    if (currentId) {
      console.log("update triggered !!");
      console.log(editPost);
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }
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
            setPostData({...postData, tags: e.target.value});
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
          onClick={() => {
            setPostData(initialPostData);
          }}
          fullWidth>
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
