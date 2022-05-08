import { useState } from 'react';
import FileBase64 from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { TextField, Button, Typography, Paper } from '@mui/material';

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
        autoComplete='off'
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant='h6' className={classes.formTitle}>
          Upload a new meme
        </Typography>
        <TextField
          className={classes.formTextField}
          name='title'
          variant='standard'
          label='Title'
          fullWidth
          size='small'
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          className={classes.formTextField}
          name='tags'
          variant='standard'
          label='Tags (separate by comma)'
          fullWidth
          size='small'
          value={postData.tags}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.split(', ') })
          }
        />
        <div className={classes.formFileInput}>
          <FileBase64
            type='file'
            id='file-upload-input'
            multiple={false}
            onDone={({ base64 }: any) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <div className={classes.formSubmit}>
          <Button
            className={classes.formButton}
            variant='outlined'
            size='medium'
            type='submit'
          >
            Submit
          </Button>
          <Button
            className={classes.formButton}
            variant='outlined'
            size='medium'
            onClick={clearForm}
          >
            Clear
          </Button>
        </div>
      </form>
    </Paper>
  );
};

export default UploadForm;
