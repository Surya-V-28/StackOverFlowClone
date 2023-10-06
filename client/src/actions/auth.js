import * as api from "../api";
import { setCurrentUser } from "./currentuser";

export const signup = (authdata, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(authdata);
    // console.log(data);
    dispatch({ type: "AUTH", data });
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
    // after loging in or signin in we can see our avatar one time only but after refreshing it's gone. because we are using dispatch function one time only. so we will use useEffect in order to prevent it. and whenever the navbar will be visible our avatar will also visbile as side effect of useEffect.
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const login = (authdata, navigate) => async (dispatch) => {
  try {
    const { data } = await api.logIn(authdata);
    // console.log(data);
    dispatch({ type: "AUTH", data });
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};