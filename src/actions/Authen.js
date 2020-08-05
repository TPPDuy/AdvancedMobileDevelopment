/* eslint-disable no-useless-escape */
/* eslint-disable no-undef */
import api from '../api/api';
import { storeUserInfo, setProfile } from '../storage/Storage';
import {
  REQUEST_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  CHECK_INPUT,
  REQUEST_REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  RESET_PASS_FAILED,
  REQUEST_RESET_PASS,
  RESET_PASS_SUCCESS,
} from '../constants/actions/Authen';

const checkInput = () => ({
  type: CHECK_INPUT,
});
const waitLogin = () => ({
  type: REQUEST_LOGIN,
});

const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  data: user,
});
const loginFailed = (error) => ({
  type: LOGIN_FAILED,
  error,
});
const waitRegister = () => ({
  type: REQUEST_REGISTER,
});
const registerSuccess = () => ({
  type: REGISTER_SUCCESS,
});
const registerFailed = (error) => ({
  type: REGISTER_FAILED,
  error,
});

export const requestLogin = (dispatch) => async (email, password) => {
  dispatch(checkInput());
  if (email && password && email.length !== 0 && password.length !== 0) {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(email) === false) {
      dispatch(loginFailed('Email không hợp lệ!'));
    } else {
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
        });
        setProfile(response.userInfo);
        setTimeout(() => {
          dispatch(loginSuccess(response));
        }, 1000);
      } else {
        console.log('login failed');
        dispatch(loginFailed('Đăng nhập thất bại!'));
      }
    }
  } else {
    dispatch(loginFailed('Vui lòng điền đủ thông tin để đăng nhập!'));
  }
};

export const requestRegister = (dispatch) => async (name, email, phone, password) => {
  dispatch(checkInput());
  if (name && phone && email && password
      && name.length !== 0 && phone.length !== 0 && email.length !== 0 && password.length !== 0) {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(email) === false) {
      dispatch(registerFailed('Email không hợp lệ!'));
    } else {
      dispatch(waitRegister());

      const data = {
        username: name,
        email,
        phone,
        password,
      };

      const response = await api.post('/user/register', data);
      if (response) {
        console.log('register: ', response);
        dispatch(registerSuccess());
      } else {
        console.log('register failed');
        dispatch(registerFailed('Email hoặc số điện thoại đã tồn tại!'));
      }
    }
  } else {
    dispatch(registerFailed('Vui lòng nhập đầy đủ thông tin!'));
  }
};

export const requestForgotPass = (dispatch) => async (email) => {
  console.log('reset pass', email);
  dispatch(checkInput());
  if (email && email.length !== 0) {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(email) === false) {
      dispatch({
        type: RESET_PASS_FAILED,
        error: 'Email không hợp lệ!',
      });
    } else {
      dispatch({
        type: REQUEST_RESET_PASS,
      });

      const data = {
        email,
      };

      const response = await api.post('/user/forget-pass/send-email', data);
      if (response) {
        console.log('forgot pass: ', response);
        dispatch({
          type: RESET_PASS_SUCCESS,
        });
      } else {
        console.log('forgot pass failed');
        dispatch({
          type: RESET_PASS_FAILED,
          error: 'Email chưa được đăng ký tài khoản!',
        });
      }
    }
  } else {
    dispatch({
      type: RESET_PASS_FAILED,
      error: 'Vui lòng nhập đầy đủ thông tin!',
    });
  }
};
