import api from '../api/api';

/* eslint-disable import/prefer-default-export */
const { REQUEST_DATA, REQUEST_FAILED, RECEIVE_SEARCH_RESULT } = require('../constants/actions/Search');

const requestSearch = () => ({
  type: REQUEST_DATA,
});
const requestFailed = () => ({
  type: REQUEST_FAILED,
});
const receiveResult = (data) => ({
  type: RECEIVE_SEARCH_RESULT,
  data,
});

export const performSearch = (dispatch) => async (searchKey, page) => {
  dispatch(requestSearch());
  const data = {
    keyword: searchKey,
    limit: 10,
    page,
  };
  console.log('data', data);
  const response = await api.post('/course/search', data);
  if (response) {
    console.log('search: ', response.payload);
    dispatch(receiveResult(response.payload.rows));
  } else {
    dispatch(requestFailed());
  }
};
