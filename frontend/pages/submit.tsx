import { Container } from '@mui/material';
import { NextPage } from 'next';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { UploadPost } from '../resources/interfaces';
import { uploadPost } from '../state/actions/posts';
import { UploadForm } from '../components';
import { user } from '../resources/userProfile';

const SubmitForm: NextPage = () => {
  const [postData, setPostData] = useState<UploadPost>({
    title: '',
    tags: [],
    selectedFile: '',
  });
  const [showSnackbar, setShowSnackbar] = useState(false);
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

    dispatch(uploadPost({ ...postData, userName: user?.result?.userName }));
    clearForm();

    setShowSnackbar(true);
  };

  const handleCloseSnackbar = () => setShowSnackbar(!showSnackbar);

  return (
    <Container maxWidth='lg'>
      <UploadForm
        postData={postData}
        setPostData={setPostData}
        handleSubmit={handleSubmit}
        clearForm={clearForm}
        showSnackbar={showSnackbar}
        handleCloseSnackbar={handleCloseSnackbar}
      />
    </Container>
  );
};

export default SubmitForm;
