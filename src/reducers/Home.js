const {
  REQUEST_DATA,
  RECEIVE_TOP_SELL_HOME,
  RECEIVE_TOP_NEW_HOME,
  RECEIVE_TOP_RATE_HOME,
  RECEIVE_RECOMMENDED_HOME,
  RECEIVE_ALL_COURSE,
  REQUEST_ALL_COURSE,
  REQUEST_FAILED,
} = require('../constants/actions/Home');

const HomeReducer = (state, action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return ({
        ...state,
        isLoading: true,
      });
    case REQUEST_ALL_COURSE:
      return ({
        ...state,
        isLoading: true,
        allCourse: [],
      });
    case REQUEST_FAILED:
      return ({
        ...state,
        isLoading: false,
      });
    case RECEIVE_TOP_SELL_HOME:
      return ({
        ...state,
        homeScreen: {
          ...state.homeScreen,
          topSell: action.data,
        },
        isLoading: false,
      });
    case RECEIVE_TOP_NEW_HOME:
      return ({
        ...state,
        homeScreen: {
          ...state.homeScreen,
          topNew: action.data,
        },
        isLoading: false,
      });
    case RECEIVE_TOP_RATE_HOME:
      return ({
        ...state,
        homeScreen: {
          ...state.homeScreen,
          topRate: action.data,
        },
        isLoading: false,
      });
    case RECEIVE_RECOMMENDED_HOME:
      return ({
        ...state,
        homeScreen: {
          ...state.homeScreen,
          recommended: action.data,
        },
        isLoading: false,
      });
    case RECEIVE_ALL_COURSE:
      return ({
        ...state,
        allCourse: action.data,
        isLoading: false,
      });
    default:
      return state;
  }
};

export default HomeReducer;
