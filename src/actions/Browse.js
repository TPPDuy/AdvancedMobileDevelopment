import {
  RECEIVE_CATEGORY,
  RECEIVE_AUTHOR,
  REQUEST_FAIL,
  RECEIVE_CATEGORY_DETAILS,
  RECEIVE_TOP_NEW,
  REQUEST_DATA,
} from '../constants/actions/Browse';
import api from '../api/api';

const requestData = () => ({
  type: REQUEST_DATA,
});
const requestFail = () => ({
  type: REQUEST_FAIL,
});
const receiveCategory = (data) => ({
  type: RECEIVE_CATEGORY,
  data,
});
const receiveAuthor = (data) => ({
  type: RECEIVE_AUTHOR,
  data,
});
const receiveCategoryDetails = (data) => ({
  type: RECEIVE_CATEGORY_DETAILS,
  data,
});
const receiveTopNew = (data) => ({
  type: RECEIVE_TOP_NEW,
  data,
});
export const getCategory = (dispatch) => async () => {
  dispatch(requestData());
  try {
    const response = await api.get('/category/all');
    const result = response.data;
    if (result.message === 'OK') {
      dispatch(receiveCategory(result.payload));
    } else dispatch(requestFail());
  } catch (error) {
    console.log(error);
    dispatch(requestFail());
  }
};
export const getAuthor = (dispatch) => async () => {
  dispatch(requestData());
  try {
    const response = await api.get('/instructor');
    const result = response.data;
    if (result.message === 'OK') {
      dispatch(receiveAuthor(result.payload));
    } else dispatch(requestFail());
  } catch (error) {
    console.log(error);
    dispatch(requestFail());
  }
};
export const getTopNew = (dispatch) => async () => {
  dispatch(requestData());
  const data = {
    offset: 1,
    limit: 10,
  };
  try {
    const response = await api.post('/course/top-new', data);
    const result = response.data;
    if (result.message === 'OK') {
      dispatch(receiveTopNew(result.payload));
    } else dispatch(requestFail());
  } catch (err) {
    dispatch(requestFail());
  }
};
export const getCategoryDetails = (dispatch) => async (id, page = 0) => {
  dispatch(requestData());
  try {
    const body = {
      keyword: '',
      opt: {
        category: [
          id,
        ],
      },
      limit: 10,
      offset: page,
    };
    const response = await api.post('/course/search', body);
    const result = response.data;
    if (result.message === 'OK') {
      dispatch(receiveCategoryDetails(result.payload.rows));
    } else dispatch(requestFail());
  } catch (error) {
    console.log(error);
    dispatch(requestFail);
  }
};
