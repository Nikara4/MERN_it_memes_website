import { Container } from '@mui/material';
import { NextPage } from 'next';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { UploadPost } from '../resources/interfaces';
import { uploadPost } from '../state/actions/posts';
import { Dialog, UploadForm } from '../components';
import { user } from '../resources/userProfile';
import { useDialogState } from '../resources/context';

const SubmitForm: NextPage = () => {
  const [postData, setPostData] = useState<UploadPost>({
    title: '',
    tags: [],
    selectedFile: '',
  });
  const { open, setOpen, closeDialog } = useDialogState();
  const uploadResult = useSelector(
    (state: any) => state
  );
  const dispatch = useDispatch();

  const clearForm = () => {
    setPostData({
      title: '',
      tags: [],
      selectedFile: '',
    });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    dispatch(
      uploadPost({
        ...postData,
        userName: user?.result?.userName,
      })
    );
    clearForm();

    setOpen(true);
  };

  return (
    <Container maxWidth='lg'>
      <UploadForm
        postData={postData}
        setPostData={setPostData}
        handleSubmit={handleSubmit}
        clearForm={clearForm}
      />
      {open && (
        <Dialog
          setOpen={setOpen}
          open={open}
          closeDialog={closeDialog}
          title='Meme upload'
        >
          {uploadResult?.posts?.info}
        </Dialog>
      )}
    </Container>
  );
};

export default SubmitForm;
