import { Container } from '@mui/material';
import { EditForm } from '../containers';
import { useDispatch, useSelector } from "react-redux";
import { PostTypeState } from "../state/types";
import { useEffect, useState } from "react";
import { getPosts } from "../state/actions/posts";


const EditPostForm = () => {
  const [currentId, setCurrentId] = useState(null);
  const posts = useSelector((state: { posts: PostTypeState }) => state.posts.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container maxWidth='lg'>
        <EditForm currentId={currentId} setCurrentId={setCurrentId}/>
    </Container>
  );
};

export default EditPostForm;