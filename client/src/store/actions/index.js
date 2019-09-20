import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const getLogin = (info, props) => dispatch => {
  dispatch({ type: LOGIN_START });
  axiosWithAuth()
    .post("/login", info)
    .then(res => {
      console.log(info);
      dispatch({ type: LOGIN_SUCCESS });
      localStorage.setItem("token", res.data.payload);
      props.history.push("/bubblePage");
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: LOGIN_FAILURE });
    });
};
