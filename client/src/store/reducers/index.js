import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  
} from "../actions";

const initialState = {
  colors: [],
  isFetching: false,
  isLogined: true,
  signInErrorMessage: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state
      };
    case LOGIN_SUCCESS:
      return {
        ...state
      };
    case LOGIN_FAILURE:
      return {
        ...state
      };
    
    default:
      return state;
  }
};
