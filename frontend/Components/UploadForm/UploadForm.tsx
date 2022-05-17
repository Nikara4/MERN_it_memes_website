import FileBase64 from 'react-file-base64';
import { Snackbar, Typography } from '@mui/material';

import { FormPaper, SubmitBox, SuccessAlert } from './styled';
import {
  FormTitle,
  FormTextField,
  FormButton,
  FormFileBox,
  Control,
} from '../../styles/globalComponents';
import { user } from '../../resources/userProfile';
import { UploadFormProps } from '../../resources/interfaces';

const UploadForm = ({
  postData,
  setPostData,
  handleSubmit,
  clearForm,
  showSnackbar,
  handleCloseSnackbar,
}: UploadFormProps) => {
  if (!user?.result.name) {
    return (
      <FormPaper>
        <Typography variant='h6' align='center'>
          You need to be signed in to upload memes to the gallery.
        </Typography>
      </FormPaper>
    );
  }

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
              // onClose={handleCloseSnackbar}
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
