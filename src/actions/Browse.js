import {
  REQUEST_CATEGORY,
  REQUEST_AUTHOR,
  RECEIVE_CATEGORY,
  RECEIVE_AUTHOR,
  REQUEST_FAIL,
} from '../constants/actions/Browse';
import api from '../api/api';

const requestCategory = () => ({
  type: REQUEST_CATEGORY,
});
const requestAuthor = () => ({
  type: REQUEST_AUTHOR,
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
export const getCategory = (dispatch) => async () => {
  dispatch(requestCategory);
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
  dispatch(requestAuthor);
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
