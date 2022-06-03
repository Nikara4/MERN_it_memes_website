import { useEffect, useState } from 'react';
import { DialogActions } from '@mui/material';
import FileBase64 from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';

import { PostInterface, PostTypeState } from '../../resources/interfaces';
import { updatePost } from '../../state/actions/posts';
import { EditDialog, EditDialogContent } from './styled';
import {
  FormTitle,
  FormButton,
  FormFileBox,
  Control,
} from '../../styles/globalComponents';

import Input from '../../components/Input/Input';

const EditForm = ({
  post,
  currentId,
  handleClose,
  open,
  setShowSnackbar,
}: any) => {
  const [postData, setPostData] = useState<PostInterface>({
    ...post,
    title: '',
    tags: [],
    selectedFile: '',
  });

  const dispatch = useDispatch();
  const updatedPost = useSelector((state: PostTypeState) =>
    currentId ? state?.posts?.find((post) => post._id === currentId) : null
  );

  useEffect(() => {
    setPostData(updatedPost);
  }, [updatedPost]);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    dispatch(updatePost(currentId, postData));
    handleClose();
    setShowSnackbar(true);
  };

  return (
    <EditDialog open={open} onClose={handleClose} maxWidth='sm' fullWidth>
      <FormTitle>Edit post</FormTitle>
      <EditDialogContent>
        <Control
          //  @ts-ignore
          component={'form'}
          onSubmit={handleSubmit}
        >
          <Input
            required
            name={'title'}
            label={'Title'}
            fullWidth
            value={postData?.title}
            handleChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
          />
          <Input
            required
            name='tags'
            label='Tags (separated by comma)'
            fullWidth
            value={postData?.tags}
            handleChange={(e) =>
              setPostData({ ...postData, tags: e.target.value.split(',') })
            }
          />
          <FormFileBox>
            <FileBase64
              type='File'
              multiple={false}
              onDone={({ base64 }: any) =>
                setPostData({ ...postData, selectedFile: base64 })
              }
            />
          </FormFileBox>
          <DialogActions>
            <FormButton onClick={handleClose}>Cancel</FormButton>
            <FormButton type={'submit'}>Submit</FormButton>
          </DialogActions>
        </Control>
      </EditDialogContent>
    </EditDialog>
  );
};

export default EditForm;
