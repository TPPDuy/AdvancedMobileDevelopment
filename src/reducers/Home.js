const {
  REQUEST_DATA, RECEIVE_TOP_SELL, RECEIVE_TOP_NEW, RECEIVE_TOP_RATE,
} = require('../constants/actions/Home');

const HomeReducer = (state, action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return ({
        ...state,
        isLoading: true,
      });
    case RECEIVE_TOP_SELL:
      return ({
        ...state,
        topSell: action.data,
        isLoading: false,
      });
    case RECEIVE_TOP_NEW:
      return ({
        ...state,
        topNew: action.data,
        isLoading: false,
      });
    case RECEIVE_TOP_RATE:
      return ({
        ...state,
        topRate: action.data,
        isLoading: false,
      });
    default:
      return state;
  }
};

export default HomeReducer;
