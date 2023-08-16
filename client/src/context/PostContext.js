import { createContext, useReducer } from "react";

export const PostContext = createContext(null);

export const postReducer = (state, action) => {
  switch (action.type) {
    case "SET_POSTS":
      return action.payload;
    case "ADD_POST":
      return [action.payload, ...state];
    case "REMOVE_POST":
      return state.filter((post) => post._id !== action.payload);
    default:
      return state;
  }
};

export const PostContextProvider = ({ children }) => {
  const [posts, dispatch] = useReducer(postReducer, null);
  return (
    <PostContext.Provider value={{ posts, dispatch }}>
      {children}
    </PostContext.Provider>
  );
};
