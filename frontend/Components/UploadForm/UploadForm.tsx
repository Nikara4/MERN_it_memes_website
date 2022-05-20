import FileBase64 from 'react-file-base64';

import { FormPaper, SubmitBox } from './styled';
import {
  FormTitle,
  FormTextField,
  FormButton,
  FormFileBox,
  Control,
  Text,
} from '../../styles/globalComponents';
import { UploadFormProps } from '../../resources/interfaces';

const UploadForm = ({
  postData,
  setPostData,
  handleSubmit,
  clearForm,
  user,
}: UploadFormProps) => {
  if (!user) {
    return (
      <FormPaper>
        <Text sx={{ textAlign: 'center' }}>
          You need to be signed in to upload memes to the gallery.
        </Text>
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
      </Control>
    </FormPaper>
  );
};

export default UploadForm;
