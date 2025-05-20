export const initialValue = {
  count: 0,
  todos: [
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Learn Redux", completed: false },
    { id: 3, text: "Learn React Router", completed: false },
  ],
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "counter/increase": {
      return { ...state, count: state.count + action.payload };
    }
    case "counter/decrease": {
      return { ...state, count: state.count - action.payload };
    }
    case "todos/add": {
    }
  }
};
