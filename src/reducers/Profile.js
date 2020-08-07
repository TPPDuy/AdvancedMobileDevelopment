const {
  REQUEST_DATA,
  REQUEST_FAILED,
  RECEIVE_DATA,
  REQUEST_FINISH,
  CHANGE_PASSWORD_SUCCESS,
  UPDATE_PROFILE_SUCCESS,
  RESET_STATUS,
  CHANGE_EMAIL_SUCCESS,
  CHANGE_EMAIL_FAILED,
} = require('../constants/actions/Profile');

const profileReducer = (state, action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case REQUEST_FAILED:
      return {
        ...state,
        isLoading: false,
        msg: action.error,
        isError: true,
      };
    case RECEIVE_DATA:
      return {
        ...state,
        isLoading: false,
        profile: action.data,
      };
    case REQUEST_FINISH:
      return {
        ...state,
        isLoading: false,
      };
    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        isSuccess: true,
        msg: action.msg,
      };
    case CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        msg: action.msg,
      };
    case CHANGE_EMAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
      };
    case RESET_STATUS:
      return {
        ...state,
        isSuccess: false,
        isError: false,
        msg: '',
      };
    default:
      return state;
  }
};

export default profileReducer;
