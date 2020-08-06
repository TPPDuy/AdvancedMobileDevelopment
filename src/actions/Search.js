import api from '../api/api';
import { saveSearchHistory } from '../storage/Storage';

/* eslint-disable import/prefer-default-export */
const {
  REQUEST_DATA, REQUEST_FAILED, RECEIVE_SEARCH_RESULT, RECEIVE_RECENT_SEARCH,
} = require('../constants/actions/Search');

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

export const performSearch = (dispatch) => async (recentSearch, searchKey, page) => {
  if (searchKey && searchKey.length !== 0) {
    if (recentSearch.indexOf(searchKey) === -1) {
      const history = [...recentSearch, searchKey];
      saveSearchHistory(history);
      dispatch({
        type: RECEIVE_RECENT_SEARCH,
        data: history,
      });
    }
    dispatch(requestSearch());
    const data = {
      keyword: searchKey,
      limit: 20,
      page,
    };
    const response = await api.post('/course/search', data);
    if (response) {
      dispatch(receiveResult(response.payload.rows));
    } else {
      dispatch(requestFailed());
    }
  }
};
