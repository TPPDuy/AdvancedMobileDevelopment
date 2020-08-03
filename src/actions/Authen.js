/* eslint-disable no-undef */
import api from '../api/api';
import { storeUserInfo } from '../storage/Storage';
import {
  REQUEST_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
} from '../constants/actions/Authen';
import { AlertModal } from '../components/common/Alert';

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
    storeUserInfo({
      id: response.userInfo.id,
      token: response.token,
      email: response.email,
      password: response.password,
    });
    setTimeout(() => {
      dispatch(loginSuccess(response));
    }, 1000);
  } else {
    console.log('login failed');
    dispatch(loginFailed());
    AlertModal('Đăng nhập', 'Đăng nhập thất bại!');
  }
};
export const requestRegister = () => {};
