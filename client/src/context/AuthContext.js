import { createContext, useReducer } from "react";
import AuthReducer from './AuthReducer'

const INITIAL_STATE = {
  user: {
    _id:"6436f2e934d1033025b869e2",
    username: "vladi",
    email: "vladi@gmail.com",
    profilePicture: "",
    coverPicture: "",
    followers: [],
    followings: [],
    isAdmin: false,
  },
  isFetching:false,
  error:false
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};