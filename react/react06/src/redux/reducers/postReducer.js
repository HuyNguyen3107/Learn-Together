const initialState = {
  posts: [],
  status: "loading", // idle, loading, succeeded, failed
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "posts/get": {
      return {
        ...state,
        posts: action.payload.posts,
        status: action.payload.status,
      };
    }
    case "posts/loading": {
      return {
        ...state,
        status: "loading",
      };
    }
    case "posts/succeeded": {
      return {
        ...state,
        status: "succeeded",
      };
    }
    case "posts/failed": {
      return {
        ...state,
        status: "failed",
      };
    }
    default: {
      return state;
    }
  }
};
