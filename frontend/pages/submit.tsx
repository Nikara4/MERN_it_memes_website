import { Container } from '@mui/material';
import { UploadForm } from '../containers';
import { useDispatch, useSelector } from "react-redux";
import { PostTypeState } from "../state/types";
import { useEffect, useState, useContext } from "react";
import { getPosts } from "../state/actions/posts";


const SubmitForm = () => {

  return (
    <Container maxWidth='lg'>
        <UploadForm />
    </Container>
  );
};

export default SubmitForm;