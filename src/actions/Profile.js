import { setProfile } from '../storage/Storage';

/* eslint-disable import/prefer-default-export */
const { REQUEST_DATA, REQUEST_FAILED, RECEIVE_DATA } = require('../constants/actions/Profile');
const { default: api } = require('../api/api');

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
export const fetchProfile = (dispatch) => async () => {
  dispatch(requestData());

  const response = await api.get('/user/me');
  if (response) {
    setProfile(response.payload);
    dispatch(receiveData(response.payload));
  } else {
    console.log('fetch error');
    setProfile(null);
    dispatch(requestFailed());
  }
};
