import { useEffect, useState } from 'react';
import { TextField, Button, Typography, Paper } from '@mui/material';
// import FileBase64 from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';

import { uploadPost } from '../../state/actions/posts';
import useStyles from './styles';

type PostInterface = {
  id: string,
  author: string;
  title: string;
  tags: string[];
  selectedFile: string;
  likes: string[];
  dislikes: string[];
  createdAt: string;
};

const UploadForm = ({ posts }: any) => {
  const [postData, setPostData] = useState<PostInterface>({
    ...posts,
    title: '',
    tags: [],
    selectedFile: '',
  });


  const classes = useStyles();
  const dispatch = useDispatch();
  // const user = JSON.parse(localStorage.getItem('profile'));

  const clearForm = () => {
    setPostData({
      ...posts,
      title: '',
      tags: [],
      selectedFile: '',
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    dispatch(uploadPost({ ...postData }));
    clearForm();
    console.log(postData);
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
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete='off'
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant='h6'>Upload a meme to the gallery</Typography>

        <TextField
          name='title'
          variant='outlined'
          label='Title'
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />

        <TextField
          name='tags'
          variant='outlined'
          label='Tags (separate by comma)'
          fullWidth
          value={postData.tags}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.split('.') })
          }
        />

        <div className={classes.fileInput}>
          <Button
            className={classes.buttonSubmit}
            variant='contained'
            color='primary'
            size='large'
            type='submit'
            fullWidth
          >
            Upload meme
          </Button>

          <Button
            className={classes.buttonSubmit}
            variant='contained'
            color='primary'
            size='large'
            type='submit'
            fullWidth
          >
            Submit
          </Button>

          <Button
            variant='outlined'
            color='secondary'
            size='large'
            onClick={clearForm}
            fullWidth
          >
            Clear form
          </Button>
        </div>
      </form>
    </Paper>
  );
};

export default UploadForm;
