import {
  REQUEST_DATA,
  REQUEST_FAILED,
  RECEIVE_SEARCH_RESULT,
  RECEIVE_RECENT_SEARCH,
  CLEAR_RECENT_SEARCH,
} from '../constants/actions/Search';

const searchReducer = (state, action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return {
        ...state,
        isLoading: true,
        searchResult: [],
      };
    case REQUEST_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    case RECEIVE_SEARCH_RESULT:
      return {
        ...state,
        isLoading: false,
        searchResult: action.data,
      };
    case RECEIVE_RECENT_SEARCH:
      return {
        ...state,
        recentSearch: action.data,
      };
    case CLEAR_RECENT_SEARCH:
      return {
        ...state,
        recentSearch: [],
      };
    default:
      return state;
  }
};

export default searchReducer;
