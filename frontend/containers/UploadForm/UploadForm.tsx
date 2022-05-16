import { useState } from 'react';
import FileBase64 from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { Alert, Paper, Snackbar, Typography } from '@mui/material';

import { PostInterface } from '../../resources/interfaces';
import { uploadPost } from '../../state/actions/posts';
import { FormPaper, SubmitBox, SuccessAlert } from './styled';
import {
  FormTitle,
  FormTextField,
  FormButton,
  FormFileBox,
  Control,
} from '../../styles/globalComponents';

let userProfile: any;

const UploadForm = ({ post }: any) => {
  const [postData, setPostData] = useState<PostInterface>({
    ...post,
    title: '',
    tags: [],
    selectedFile: '',
  });
  const [showSnackbar, setShowSnackbar] = useState(false);

  const dispatch = useDispatch();

  if (typeof window !== 'undefined') {
    userProfile = localStorage.getItem('profile');
  }
  const user = userProfile && JSON.parse(userProfile);

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

    dispatch(uploadPost({ ...postData, userName: user?.result?.userName }));
    clearForm();

    setShowSnackbar(true);
  };

  const handleCloseSnackbar = () => setShowSnackbar(!showSnackbar);

  if (!user?.result.name) {
    return (
      <FormPaper>
        <Typography variant='h6' align='center'>
          Please login.
        </Typography>
      </FormPaper>
    );
  }

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
    <FormPaper>
      <Control required>
        <FormTitle>Upload a new meme</FormTitle>
        <FormTextField
          name='title'
          variant='standard'
          label='Title'
          fullWidth
          size='small'
          value={postData.title}
          onChange={(e: any) =>
            setPostData({ ...postData, title: e.target.value })
          }
        />
        <FormTextField
          name='tags'
          variant='standard'
          label='Tags (separated by comma)'
          fullWidth
          size='small'
          value={postData.tags}
          onChange={(e: any) =>
            setPostData({ ...postData, tags: e.target.value.split(',') })
          }
        />
        <FormFileBox>
          <FileBase64
            type='file'
            id='file-upload-input'
            multiple={false}
            onDone={({ base64 }: any) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </FormFileBox>
        <SubmitBox>
          <FormButton
            variant='outlined'
            size='medium'
            type='submit'
            onClick={handleSubmit}
          >
            Submit
          </FormButton>
          <FormButton variant='outlined' size='medium' onClick={clearForm}>
            Clear
          </FormButton>
        </SubmitBox>
        {showSnackbar && (
          <Snackbar open autoHideDuration={6000} onClose={handleCloseSnackbar}>
            <SuccessAlert
              onClose={handleCloseSnackbar}
              severity='success'
              sx={{ width: '100%' }}
            >
              New meme has been added successfully. Thank you!
            </SuccessAlert>
          </Snackbar>
        )}
      </Control>
    </FormPaper>
  );
};

export default UploadForm;
