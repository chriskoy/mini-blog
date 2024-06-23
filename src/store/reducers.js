// reducers.js
import { LOGIN, LOGOUT } from "./actions";
 
const initialState = {
  isLoggedIn: false,
  user: JSON.parse(localStorage.getItem('user'))
};
 
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null
      };
    default:
      return state;
  }
};
 
export default loginReducer;