import { Container } from '@mui/material';
import { NextPage } from 'next';
import { UploadForm } from '../containers';

const SubmitForm: NextPage = () => {

  return (
    <Container maxWidth='lg'>
        <UploadForm />
    </Container>
  );
};

export default SubmitForm;