import { REQUEST_DATA, RECEIVE_DATA, REQUEST_FAILED } from '../constants/actions/Favorite';

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return {
        ...state,
        isLoading: true,
        favorites: [],
      };
    case RECEIVE_DATA:
      return {
        ...state,
        isLoading: false,
        favorites: action.data,
      };
    case REQUEST_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default favoriteReducer;
