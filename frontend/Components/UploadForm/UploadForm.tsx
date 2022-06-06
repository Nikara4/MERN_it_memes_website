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
import { Input } from '../../components';

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
      <Control
        // @ts-ignore
        component='form'
        onSubmit={handleSubmit}
      >
        <FormTitle>Upload a new meme</FormTitle>
        <Input
          name='title'
          label='Title'
          fullWidth
          value={postData.title}
          handleChange={(e: any) =>
            setPostData({ ...postData, title: e.target.value })
          }
        />
        <Input
          name='tags'
          label='Tags (separated by comma)'
          fullWidth
          value={postData.tags}
          handleChange={(e: any) =>
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
          <FormButton variant='outlined' size='medium' type='submit'>
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
