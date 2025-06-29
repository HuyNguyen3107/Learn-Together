import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../redux/middlewares/postMiddleware";
import CircularProgress from "@mui/material/CircularProgress";

function Post() {
  const posts = useSelector((state) => state.post.posts);
  const status = useSelector((state) => state.post.status);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {status === "loading" ? (
        <CircularProgress size={"30px"} color="secondary" />
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Post;
