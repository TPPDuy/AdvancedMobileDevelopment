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
  const response = await api.get('/category/all');
  if (response) {
    dispatch(receiveCategory(response.payload));
  } else dispatch(requestFail());
};
export const getAuthor = (dispatch) => async () => {
  dispatch(requestData());
  const response = await api.get('/instructor');
  if (response) {
    dispatch(receiveAuthor(response.payload));
  } else dispatch(requestFail());
};
export const getTopNew = (dispatch) => async () => {
  dispatch(requestData());
  const data = {
    offset: 1,
    limit: 20,
  };
  try {
    const response = await api.post('/course/top-new', data);
    if (response) {
      dispatch(receiveTopNew(response.payload));
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
      limit: 20,
      offset: page,
    };
    const response = await api.post('/course/search', body);
    if (response) {
      dispatch(receiveCategoryDetails(response.payload.rows));
    } else dispatch(requestFail());
  } catch (error) {
    console.log(error);
    dispatch(requestFail);
  }
};
