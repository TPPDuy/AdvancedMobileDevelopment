import {
  REQUEST_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  CHECK_INPUT,
  REQUEST_REGISTER,
  REQUEST_RESET_PASS,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  RESET_REGISTER_STATUS,
  RESET_PASS_SUCCESS,
  RESET_PASS_FAILED,
  RESET_FORGOT_PASS_STATUS,
} from '../constants/actions/Authen';

const AuthenReducer = (state, action) => {
  switch (action.type) {
    case CHECK_INPUT:
      return {
        ...state,
        loginStatus: 0,
        registerStatus: 0,
        forgotPassStatus: 0,
        msg: '',
      };
    case REQUEST_LOGIN:
    case REQUEST_REGISTER:
    case REQUEST_RESET_PASS:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        loginStatus: 1,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        isLoading: false,
        loginStatus: 2,
        msg: action.error,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        registerStatus: 1,
      };
    case REGISTER_FAILED:
      return {
        ...state,
        isLoading: false,
        registerStatus: 2,
        msg: action.error,
      };
    case RESET_REGISTER_STATUS:
      return {
        ...state,
        registerStatus: 0,
      };
    case RESET_PASS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        forgotPassStatus: 1,
      };
    case RESET_PASS_FAILED:
      return {
        ...state,
        isLoading: false,
        forgotPassStatus: 2,
        msg: action.error,
      };
    case RESET_FORGOT_PASS_STATUS:
      return {
        ...state,
        forgotPassStatus: 0,
      };
    default:
      return state;
  }
};

export default AuthenReducer;
