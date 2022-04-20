import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@mui/material";

import Post from "./Post/Post";
import useStyles from "./styles";
import postsReducer from "../../state/reducers/posts";

interface UploadFormInterface {
    currentId: string;
    setCurrentId: Function;
    }

const Posts = ({ currentId, setCurrentId }: UploadFormInterface) => {
  const classes = useStyles();
  const posts = useSelector((state) => state);

  console.log(posts.postsReducer);

  return <Post currentId={currentId} setCurrentId={setCurrentId} post='post'/>

//   return !posts.length ? (
//     <CircularProgress />
//   ) : (
//     <Grid
//       className={classes.mainContainer}
//       container
//       alignItems="stretch"
//       spacing={3}
//     >
//       {posts.map((post: any) => (
//         <Grid item key={post._id} xs={12} sm={6}>
//           <Post post={post} setCurrentId={setCurrentId} currentId={currentId}/>
//         </Grid>
//       ))}
//     </Grid>
//   );
};

export default Posts;