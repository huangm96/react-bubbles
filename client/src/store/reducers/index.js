import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  
} from "../actions";

const initialState = {
 
  isLogined: false,
  signInErrorMessage: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        isLogined: false,
        signInErrorMessage: false
      };
    case LOGIN_SUCCESS:
      return {
          ...state,
          isLogined: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLogined: false,
        signInErrorMessage: true
      };
    
    default:
      return state;
  }
};
