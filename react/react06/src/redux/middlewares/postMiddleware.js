export const getPosts = () => {
  return async (dispatch) => {
    setTimeout(async () => {
      const res = await fetch("https://dummyjson.com/posts");
      const data = await res.json();
      dispatch({
        type: "posts/get",
        payload: {
          posts: data.posts,
          status: "succeeded",
        },
      });
    }, 2000);
  };
};
