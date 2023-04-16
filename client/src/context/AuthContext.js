import { createContext, useReducer } from "react";
import AuthReducer from './AuthReducer'

const INITIAL_STATE = {
  user: {
    _id:"6436f2e934d1033025b869e2",
    username: "vladi",
    email: "vladi@gmail.com",
    profilePicture: "",
    coverPicture: "",
    followers: [
      "642f0c383434e09bdb761213",
      "643057562db53c7b9d36466d"
    ],
    followings: [
      "643057562db53c7b9d36466d",
      "642f0c383434e09bdb761213"
    ],
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