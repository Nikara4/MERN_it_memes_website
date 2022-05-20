import { Container } from '@mui/material';
import { NextPage } from 'next';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';

import { UploadPost } from '../resources/interfaces';
import { uploadPost } from '../state/actions/posts';
import { Dialog, UploadForm } from '../components';
import { useDialogState, useAuthState } from '../resources/context';

const SubmitForm: NextPage = () => {
  const [postData, setPostData] = useState<UploadPost>({
    title: '',
    tags: [],
    selectedFile: '',
  });
  const { open, setOpen, closeDialog } = useDialogState();
  const { userInfo } = useAuthState();
  const uploadResult = useSelector((state: any) => state);
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
        userName: userInfo?.user?.userName,
      })
    );
    clearForm();

    setOpen(true);
  };

  return (
    <>
      <Head>
        <title>Upload a Meme | IT Memes World</title>
      </Head>
      <Container maxWidth='lg'>
        <UploadForm
          postData={postData}
          setPostData={setPostData}
          handleSubmit={handleSubmit}
          clearForm={clearForm}
          user={userInfo}
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
    </>
  );
};

export default SubmitForm;
