import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Container, Grow, Grid, CircularProgress } from '@mui/material';
import { Post } from '../containers';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import useStyles from "./styles";
import { getPosts } from "../state/actions/posts";
import { PostTypeState } from "../state/types";
import useStyles from '../styles/indexStyles'

const Home: NextPage = () => {
  const classes = useStyles();
  const posts = useSelector((state: { posts: PostTypeState}) => state?.posts.posts);
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  console.log(posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  console.log(currentId)

  return (
    <>
      <Head>
        <title>IT Memes World</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Grow in>
        <Grid
          container={true}
          direction="column"
          justifyContent="space-between"
          alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>

{
   !posts?.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.mainContainer}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post: any) => (
        <Grid item key={post._id} xs={12} sm={6}>
          <Post post={post} setCurrentId={setCurrentId} currentId={currentId}/>
        </Grid>
      ))}
    </Grid>)
}


            </Grid>
        </Grid>
      </Grow>
    </>
  );
};

export default Home;
