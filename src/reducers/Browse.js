import {
  REQUEST_CATEGORY, REQUEST_AUTHOR, RECEIVE_CATEGORY, RECEIVE_AUTHOR, REQUEST_FAIL,
} from '../constants/actions/Browse';

const BroweReducer = (state, action) => {
  switch (action.type) {
    case REQUEST_CATEGORY:
    case REQUEST_AUTHOR:
      return {
        ...state,
        isLoading: true,
      };
    case RECEIVE_CATEGORY:
      return {
        ...state,
        isLoading: false,
        categories: action.data,
      };
    case RECEIVE_AUTHOR:
      return {
        ...state,
        isLoading: false,
        authors: action.data,
      };
    case REQUEST_FAIL:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default BroweReducer;
