import { Container } from '@mui/material';
import { UploadForm } from '../containers';
import { useDispatch, useSelector } from "react-redux";
import { PostTypeState } from "../state/types";
import { useEffect, useState, useContext } from "react";
import { getPosts } from "../state/actions/posts";


const SubmitForm = () => {
  const posts = useSelector((state: { posts: PostTypeState }) => state.posts.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container maxWidth='lg'>
        <UploadForm />
    </Container>
  );
};

export default SubmitForm;