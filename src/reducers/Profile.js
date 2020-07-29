const { REQUEST_DATA, REQUEST_FAILED, RECEIVE_DATA } = require('../constants/actions/Profile');

const profileReducer = (state, action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return {
        ...state,
        isLoading: true,
      };
    case REQUEST_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    case RECEIVE_DATA:
      return {
        ...state,
        isLoading: false,
        profile: action.data,
      };
    default:
      return state;
  }
};

export default profileReducer;
