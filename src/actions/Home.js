/* eslint-disable no-undef */
import api from '../api/api';
import {
  REQUEST_DATA,
  REQUEST_FAILED,
  RECEIVE_TOP_SELL_HOME,
  RECEIVE_TOP_NEW_HOME,
  RECEIVE_TOP_RATE_HOME,
  RECEIVE_RECOMMENDED_HOME,
  RECEIVE_ALL_COURSE,
  REQUEST_ALL_COURSE,
} from '../constants/actions/Home';
import { getUserInfo } from '../storage/Storage';

const waitRequest = () => ({
  type: REQUEST_DATA,
});

const receiveData = (type, data) => ({
  type,
  data,
});
const requestFail = (error) => ({
  type: REQUEST_FAILED,
});

export const requestDataHomeScreen = (dispatch) => async (page) => {
  dispatch(waitRequest());
  const user = await getUserInfo();
  const data = {
    offset: page,
    limit: 10,
  };

  const topSellResponse = await api.post('/course/top-sell', data);
  if (topSellResponse) {
    dispatch(receiveData(RECEIVE_TOP_SELL_HOME, topSellResponse.payload));
  } else {
    dispatch(requestFail());
  }

  const topNewResponse = await api.post('/course/top-new', data);
  if (topNewResponse) {
    dispatch(receiveData(RECEIVE_TOP_NEW_HOME, topNewResponse.payload));
  } else {
    dispatch(requestFail());
  }

  const topRateResponse = await api.post('/course/top-rate', data);
  if (topRateResponse) {
    dispatch(receiveData(RECEIVE_TOP_RATE_HOME, topRateResponse.payload));
  } else {
    dispatch(requestFail());
  }

  if (user !== null) {
    const recommendResponse = await api.get(`/user/recommend-course/${user.id}/10/1`);
    if (recommendResponse) {
      dispatch(receiveData(RECEIVE_RECOMMENDED_HOME, recommendResponse.payload));
    } else {
      dispatch(requestFail());
    }
  }
};

export const requestTopNew = (dispatch) => async (page) => {
  const data = {
    offset: page,
    limit: 20,
  };
  dispatch({ type: REQUEST_ALL_COURSE });
  const topNewResponse = await api.post('/course/top-new', data);
  if (topNewResponse) {
    dispatch(receiveData(RECEIVE_ALL_COURSE, topNewResponse.payload));
  } else {
    dispatch(requestFail());
  }
};

export const requestTopSell = (dispatch) => async (page) => {
  const data = {
    offset: page,
    limit: 20,
  };
  dispatch({ type: REQUEST_ALL_COURSE });

  const topSellResponse = await api.post('/course/top-sell', data);
  if (topSellResponse) {
    dispatch(receiveData(RECEIVE_ALL_COURSE, topSellResponse.payload));
  } else {
    dispatch(requestFail());
  }
};

export const requestTopRate = (dispatch) => async (page) => {
  const data = {
    offset: page,
    limit: 20,
  };
  dispatch({ type: REQUEST_ALL_COURSE });

  const topRateResponse = await api.post('/course/top-rate', data);
  if (topRateResponse) {
    dispatch(receiveData(RECEIVE_ALL_COURSE, topRateResponse.payload));
  } else {
    dispatch(requestFail());
  }
};

export const requestRecommended = (dispatch) => async (page) => {
  const user = await getUserInfo();
  if (user !== null) {
    dispatch({ type: REQUEST_ALL_COURSE });

    const recommendResponse = await api.get(`/user/recommend-course/${user.id}/20/1`);
    if (recommendResponse) {
      dispatch(receiveData(RECEIVE_ALL_COURSE, recommendResponse.payload));
    } else {
      dispatch(requestFail());
    }
  }
};

export const requestAllCourse = (dispatch) => (type) => {
  switch (type) {
    case 'TOP_RATE':
      requestRecommended(dispatch)(1);
      break;
    case 'TOP_NEW':
      requestTopNew(dispatch)(1);
      break;
    case 'TOP_SELL':
      requestTopSell(dispatch)(1);
      break;
    case 'RECOMMENDED':
      requestRecommended(dispatch)(1);
      break;
    default:
      break;
  }
};
