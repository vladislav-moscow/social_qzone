import axios from "axios";

export const loginCall = async (userCredential, dispatch) => {
  dispatch({type:"LOGIN_START"});
  try{
    const responce = await axios.post("http://localhost:8800/api/auth/login", userCredential);
    dispatch({type:"LOGIN_SUCCESS", payload:responce.data});

  } catch(err) {
    dispatch({type:"LOGIN_ERROR", payload:err});
  }
}