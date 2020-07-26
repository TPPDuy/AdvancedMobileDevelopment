/* eslint-disable no-undef */
import api from '../api/api';
import { storeUserInfo } from '../storage/Storage';
import {
  REQUEST_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
} from '../constants/actions/Authen';

const waitLogin = () => ({
  type: REQUEST_LOGIN,
});

const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  data: user,
});
const loginFailed = (error) => ({
  type: LOGIN_FAILED,
});

export const requestLogin = (dispatch) => async (email, password) => {
  dispatch(waitLogin());

  const data = {
    email,
    password,
  };

  const response = await api.post('/user/login', data);
  if (response) {
    console.log('login: ', response);
    storeUserInfo({ id: response.userInfo.id, token: response.token });
    setInterval(() => {
      dispatch(loginSuccess(response));
    }, 1500);
  } else {
    console.log('login failed');
    dispatch(loginFailed());
  }
};
export const requestRegister = () => {};
