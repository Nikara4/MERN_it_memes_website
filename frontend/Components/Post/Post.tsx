import useStyles from './styles';
import { v4 as uuidv4 } from 'uuid';
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
import { useDispatch } from 'react-redux';
import { deletePost, likePost, dislikePost } from '../../state/actions/posts';
import { PostInterface } from '../../state/types';

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

  // const LikingPost = () => {
  //   if (post.likes.length > 0) {
  //     return post.likes.find(
  //       (like) => like === (user?.result?.googleId || user?.result?._id)
  //     ) ? (
  //       <>
  //         <ThumbUpAlt fontSize='small' />
  //         &nbsp;
  //         {post.likes.length > 2
  //           ? `You and ${post.likes.length - 1} others`
  //           : `${post.likes.length} like${post.likes.length > 2 ? 's' : ''}`}
  //       </>
  //     ) : (
  //       <>
  //         <ThumbUpOffAlt fontSize='small' />
  //         &nbsp;
  //         {post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}
  //       </>
  //     );
  //   }
  //   return (
  //     <>
  //       <ThumbUpOffAlt fontSize='small' />
  //       &nbsp;
  //       {post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}
  //     </>
  //   );
  // };

  // const DislikingPost = () => {
  //   if (post.dislikes.length > 0) {
  //     return post.dislikes.find(
  //       (like) => like === (user?.result?.googleId || user?.result?._id)
  //     ) ? (
  //       <>
  //         <ThumbDown fontSize='small' />
  //         &nbsp;
  //         {post.dislikes.length > 2
  //           ? `You and ${post.dislikes.length - 1} others`
  //           : `${post.dislikes.length} dislike${
  //               post.dislikes.length > 2 ? 's' : ''
  //             }`}
  //       </>
  //     ) : (
  //       <>
  //         <ThumbDownOffAlt fontSize='small' />
  //         &nbsp;
  //         {post.dislikes.length}{' '}
  //         {post.dislikes.length === 1 ? 'Dislike' : 'Dislikes'}
  //       </>
  //     );
  //   }
  //   return (
  //     <>
  //       <ThumbDownOffAlt fontSize='small' />
  //       &nbsp;
  //       {post.dislikes.length}{' '}
  //       {post.dislikes.length === 1 ? 'Dislike' : 'Dislikes'}
  //     </>
  //   );
  // };

  return (
    <Card className={classes.card}>
      <div className={classes.tagsWrapper}>
        {post.tags.map((tag) => (
          <div key={uuidv4()}>
            <Typography
              variant='body2'
              color='textSecondary'
              component='p'
              className={classes.tags}
            >
              {tag}
            </Typography>
          </div>
        ))}
      </div>
      <Typography className={classes.title} variant='h6' gutterBottom>
        {post.title}
      </Typography>
      <Typography variant='body2' color='textSecondary' component='p'>
        {`${Number(post.likes) + Number(post.dislikes)} Votes`}
      </Typography>
      <CardMedia
        className={classes.media}
        image={post.selectedFile}
        title={post.title}
      />
      <CardActions className={classes.infoWrapper}>
        {(user?.result?.googleId === post?.author ||
          user?.result?._id === post?.author) && (
          <div className={classes.overlay}>
            <Button
              size='small'
              onClick={() => {
                setCurrentId(post._id);
                handleClickOpen();
              }}
            >
              Edit
            </Button>
          </div>
        )}
        <div className={classes.overlay}>
          <Typography variant='body2'>
            {moment(post.createdAt).fromNow()}
          </Typography>
        </div>
      </CardActions>
      <CardActions className={classes.cardActions}>
        <div className={classes.overlay2}>
          <Button
            size='small'
            onClick={() => dispatch(likePost(post._id))}
            // disabled={!user?.result}
          >
            Like&nbsp;{post.likes}
          </Button>
          <Button
            size='small'
            onClick={() => dispatch(dislikePost(post._id))}
            // disabled={!user?.result}
          >
            Dislike&nbsp;{post.dislikes}
          </Button>
        </div>
        {(user?.result?.googleId === post?.author ||
          user?.result?._id === post?.author) && (
          <Button size='small' onClick={() => dispatch(deletePost(post._id))}>
            <Delete fontSize='small' />
            Delete
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default Post;
