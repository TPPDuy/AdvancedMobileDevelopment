import {
  RECEIVE_CATEGORY,
  RECEIVE_AUTHOR,
  REQUEST_FAIL,
  RECEIVE_CATEGORY_DETAILS,
  REQUEST_DATA,
  RECEIVE_TOP_NEW,
} from '../constants/actions/Browse';

const BroweReducer = (state, action) => {
  switch (action.type) {
    case REQUEST_DATA:
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
    case RECEIVE_CATEGORY_DETAILS:
      return {
        ...state,
        categoryDetails: action.data,
        isLoading: false,
      };
    case RECEIVE_TOP_NEW:
      return {
        ...state,
        topNew: action.data,
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
