import useStyles from './styles';
import {
  Card,
  CardActions,
  CardMedia,
  Button,
  Typography,
} from '@mui/material';
import {
  ThumbUpAlt,
  ThumbUpOffAlt,
  Delete,
  MoreHoriz,
  ThumbDown,
  ThumbDownOffAlt,
} from '@mui/icons-material';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost, likePost, dislikePost, getPosts } from '../../state/actions/posts';
import { PostTypeState, PostInterface } from '../../state/types';

interface PostPropsInterface {
  currentId: string;
  setCurrentId: Function;
  post: PostInterface;
  handleClickOpen: Function;
}

const Post = ({
  currentId,
  setCurrentId,
  post,
  handleClickOpen,
}: PostPropsInterface) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  // const currentPost = useSelector((state: { posts: PostTypeState}) =>
  // currentId ? state?.posts.data.find((post: PostInterface) => post._id === currentId) : null
  // );

  const user = JSON.parse(localStorage.getItem('profile'));

  const LikingPost = () => {
    if (post.likes.length > 0) {
      return post.likes.find(
        (like) => like === (user?.result?.googleId || user?.result?._id)
      ) ? (
        <>
          <ThumbUpAlt fontSize='small' />
          &nbsp;
          {post.likes.length > 2
            ? `You and ${post.likes.length - 1} others`
            : `${post.likes.length} like${post.likes.length > 2 ? 's' : ''}`}
        </>
      ) : (
        <>
          <ThumbUpOffAlt fontSize='small' />
          &nbsp;
          {post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}
        </>
      );
    }
    return (
      <>
        <ThumbUpOffAlt fontSize='small' />
        &nbsp;
        {post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}
      </>
    );
  };

  const DislikingPost = () => {
    if (post.dislikes.length > 0) {
      return post.dislikes.find(
        (like) => like === (user?.result?.googleId || user?.result?._id)
      ) ? (
        <>
          <ThumbDown fontSize='small' />
          &nbsp;
          {post.dislikes.length > 2
            ? `You and ${post.dislikes.length - 1} others`
            : `${post.dislikes.length} dislike${
                post.dislikes.length > 2 ? 's' : ''
              }`}
        </>
      ) : (
        <>
          <ThumbDownOffAlt fontSize='small' />
          &nbsp;
          {post.dislikes.length}{' '}
          {post.dislikes.length === 1 ? 'Dislike' : 'Dislikes'}
        </>
      );
    }
    return (
      <>
        <ThumbDownOffAlt fontSize='small' />
        &nbsp;
        {post.dislikes.length}{' '}
        {post.dislikes.length === 1 ? 'Dislike' : 'Dislikes'}
      </>
    );
  };

  const handleDelete = async () => {
    await dispatch(deletePost(post._id))
    console.log('Post has been deleted.');
    dispatch(getPosts());
  }

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={post.selectedFile}
        title={post.title}
      />

      <div className={classes.overlay}>
        <Typography variant='body2'>
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>

      {(user?.result?.googleId === post?.author ||
        user?.result?._id === post?.author) && (
        <div className={classes.overlay2}>
          <Button
            style={{ color: 'white' }}
            size='small'
            onClick={() => {
              setCurrentId(post._id);
              handleClickOpen();
            }}
          >
            <MoreHoriz fontSize='medium' />
          </Button>
        </div>
      )}

      <div className={classes.details}>
        <Typography
          variant='body2'
          style={{ fontSize: 12 }}
          color='textSecondary'
          component='p'
        >
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <Typography
        className={classes.title}
        variant='h6'
        gutterBottom
        style={{ color: '#326D90' }}
      >
        {post.title}
      </Typography>

      <CardActions className={classes.cardActions}>
        <Button
          size='small'
          onClick={() => dispatch(likePost(post._id))}
          style={{ color: '#8481EC' }}
          disabled={!user?.result}
        >
          <LikingPost />
        </Button>
        <Button
          size='small'
          onClick={() => dispatch(dislikePost(post._id))}
          style={{ color: '#8481EC' }}
          disabled={!user?.result}
        >
          <DislikingPost />
        </Button>
        {(user?.result?.googleId === post?.author ||
          user?.result?._id === post?.author) && (
          <Button
            size='small'
            onClick={handleDelete}
            style={{ color: '#8481EC' }}
          >
            <Delete fontSize='small' />
            Delete
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default Post;
