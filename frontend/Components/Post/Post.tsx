import { v4 as uuidv4 } from 'uuid';
import {
  ThumbUpAlt,
  ThumbUpOffAlt,
  Delete,
  ThumbDown,
  ThumbDownOffAlt,
} from '@mui/icons-material';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { deletePost, likePost, dislikePost } from '../../state/actions/posts';
import { Post, PostProps } from '../../resources/interfaces';
import {
  PostCard,
  TagsBox,
  TagBox,
  TagTypography,
  TitleTypography,
  OverlayTypography,
  PostCardMedia,
  PostCardActions,
  ActionsBox,
  PostButton,
  LikesCardActions,
  LikesBox,
} from './styled';

const Post = ({ setCurrentId, post, handleClickOpen, user }: PostProps) => {
  const dispatch = useDispatch();

  // const currentPost = useSelector((state: { posts: PostTypeState}) =>
  // currentId ? state?.posts.data.find((post: PostInterface) => post._id === currentId) : null
  // );

  const Likes = () => {
    if (post.likes.length > 0) {
      return post.likes.find(
        (like) => like === (user?.googleId || user?._id)
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

  const Dislikes = () => {
    if (post.dislikes.length > 0) {
      return post.dislikes.find(
        (like) => like === (user?.googleId || user?._id)
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

console.log(post)
  return (
    <PostCard>
      <TagsBox>
        {post.tags.map((tag) => (
          <TagBox key={uuidv4()}>
            <TagTypography variant='body2'>{tag}</TagTypography>
          </TagBox>
        ))}
      </TagsBox>
      <TitleTypography variant='h6'>{post.title}</TitleTypography>
      <OverlayTypography variant='body2'>
        {`${post.likes.length + post.dislikes.length} Votes`}
      </OverlayTypography>
      <PostCardMedia image={post.selectedFile} title={post.title} />
      <PostCardActions>
        {(user?.googleId === post.author || user?._id === post.author) && (
          <ActionsBox>
            <PostButton
              size='small'
              onClick={() => {
                setCurrentId(post._id);
                handleClickOpen();
              }}
            >
              Edit
            </PostButton>
          </ActionsBox>
        )}
        <ActionsBox>
          <OverlayTypography variant='body2'>
            by {post.userName}
          </OverlayTypography>
          <OverlayTypography variant='body2'>
            {moment(post.createdAt).fromNow()}
          </OverlayTypography>
        </ActionsBox>
      </PostCardActions>
      <LikesCardActions>
        <LikesBox>
          <PostButton
            size='small'
            onClick={() => dispatch(likePost(post._id))}
            disabled={!user?._id}
          >
            <Likes />
          </PostButton>
          <PostButton
            size='small'
            onClick={() => dispatch(dislikePost(post._id))}
            disabled={!user?._id}
          >
            <Dislikes />
          </PostButton>
        </LikesBox>
        {(user?.googleId === post.author || user?._id === post.author) && (
          <PostButton
            size='small'
            onClick={() => dispatch(deletePost(post._id))}
          >
            <Delete fontSize='small' />
            Delete
          </PostButton>
        )}
      </LikesCardActions>
    </PostCard>
  );
};

export default Post;
