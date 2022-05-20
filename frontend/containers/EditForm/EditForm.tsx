import { useEffect, useState } from 'react';
import { DialogActions } from '@mui/material';
import FileBase64 from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';

import { Post, PostTypeState } from '../../resources/interfaces';
import { updatePost } from '../../state/actions/posts';
import { EditDialog, EditDialogContent } from './styled';
import {
  FormTitle,
  FormTextField,
  FormButton,
  FormFileBox,
  Control,
} from '../../styles/globalComponents';

const EditForm = ({ post, currentId, handleClose, open }: any) => {
  const [postData, setPostData] = useState<Post>({
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
    console.log('Post has been updated.');
    handleClose();
  };

  return (
    <EditDialog open={open} onClose={handleClose} maxWidth='sm' fullWidth>
      <FormTitle>Edit post</FormTitle>
      <EditDialogContent>
        <Control required onSubmit={handleSubmit}>
          <FormTextField
            name='title'
            variant='standard'
            label='Title'
            fullWidth
            value={postData?.title}
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
          />
          <FormTextField
            name='tags'
            variant='standard'
            label='Tags (separated by comma)'
            fullWidth
            value={postData?.tags}
            onChange={(e) =>
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
        </Control>
      </EditDialogContent>
      <DialogActions>
        <FormButton onClick={handleClose}>Cancel</FormButton>
        <FormButton onClick={handleSubmit}>Submit</FormButton>
      </DialogActions>
    </EditDialog>
  );
};

export default EditForm;
