/* eslint-disable import/prefer-default-export */
import {
  REQUEST_DATA,
  REQUEST_FAILED,
  RECEIVE_DATA,
} from '../constants/actions/Favorite';
import { getUserInfo } from '../storage/Storage';
import api from '../api/api';

const requestData = () => ({
  type: REQUEST_DATA,
});

const requestFailed = () => ({
  type: REQUEST_FAILED,
});

const receiveData = (data) => ({
  type: RECEIVE_DATA,
  data,
});

export const fetchFavorite = (dispatch) => async (page) => {
  dispatch(requestData);
  const response = await api.get('/user/get-favorite-courses');

  if (response) {
    console.log('favorite response: ', response);
    dispatch(receiveData(response.payload));
  } else {
    console.log('favorite error');
    dispatch(requestFailed());
  }
};
