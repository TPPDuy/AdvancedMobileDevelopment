/* eslint-disable no-undef */
import api from '../api/api';
import {
  REQUEST_DATA, REQUEST_FAILED, RECEIVE_TOP_SELL, RECEIVE_TOP_NEW, RECEIVE_TOP_RATE,
} from '../constants/actions/Home';

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

const requestData = (dispatch) => (page) => {
  dispatch(waitRequest());
  const data = {
    offset: page,
    limit: 10,
  };

  api.post('/course/top-sell', data)
    .then((response) => {
      dispatch(receiveData(RECEIVE_TOP_SELL, response.data.payload));
    })
    .catch((error) => {
      requestFail(error);
    });

  api.post('/course/top-new', data)
    .then((response) => {
      dispatch(receiveData(RECEIVE_TOP_NEW, response.data.payload));
    })
    .catch((error) => {
      requestFail(error);
    });

  api.post('/course/top-rate', data)
    .then((response) => {
      dispatch(receiveData(RECEIVE_TOP_RATE, response.data.payload));
    })
    .catch((error) => {
      requestFail(error);
    });
};

export default requestData;
