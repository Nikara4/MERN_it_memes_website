import { useEffect, useState } from 'react';
import { TextField, Button, Typography, Paper } from '@mui/material';
import FileBase64 from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';

import { PostInterface } from '../../state/types';
import { uploadPost } from '../../state/actions/posts';
import useStyles from './styles';

const UploadForm = ({ post }: any) => {
  const [postData, setPostData] = useState<PostInterface>({
    ...post,
    title: '',
    tags: [],
    selectedFile: '',
  });

  const classes = useStyles();
  const dispatch = useDispatch();
  // const user = JSON.parse(localStorage.getItem('profile'));

  const clearForm = () => {
    setPostData({
      ...post,
      title: '',
      tags: [],
      selectedFile: '',
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    dispatch(uploadPost({ ...postData }));
    clearForm();

    //name: user?.result?.name
  };

  // useEffect(() => {
  //     if (post) setPostData(post);
  // }, [post]);
  // if (!user?.result?.name) {
  //     return (
  //         <Paper className={classes.paper}>
  //             <Typography variant="h5" align="center">
  //                 You need to be signed in to upload memes to the gallery.
  //             </Typography>
  //             {/* sign in / sign up button */}
  //         </Paper>
  //     )
  // }

  // console.log(currentId);
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          Upload a new post
        </Typography>

        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />

        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.split(",") })
          }
        />
        <div className={classes.fileInput}>
          <FileBase64
            type="File"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
          <Button
            className={classes.buttonSubmit}
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            fullWidth
          >
            Submit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={clearForm}
            fullWidth
          >
            Clear
          </Button>
        </div>
      </form>
    </Paper>
  );
};

export default UploadForm;
