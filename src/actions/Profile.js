import { setProfile, getProfile, getUserInfo } from '../storage/Storage';

/* eslint-disable import/prefer-default-export */
const {
  REQUEST_DATA,
  REQUEST_FAILED,
  RECEIVE_DATA,
  REQUEST_FINISH,
  UPDATE_PROFILE_SUCCESS,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_EMAIL_SUCCESS,
} = require('../constants/actions/Profile');
const { default: api } = require('../api/api');

const requestData = () => ({
  type: REQUEST_DATA,
});
const requestFailed = (error) => ({
  type: REQUEST_FAILED,
  error,
});
const receiveData = (data) => ({
  type: RECEIVE_DATA,
  data,
});
const requestFinish = () => ({
  type: REQUEST_FINISH,
});
const updateProfileSuccess = (msg) => ({
  type: UPDATE_PROFILE_SUCCESS,
  msg,
});
const changePassSuccess = (msg) => ({
  type: CHANGE_PASSWORD_SUCCESS,
  msg,
});

export const fetchProfile = (dispatch) => async () => {
  dispatch(requestData());

  const response = await api.get('/user/me');
  if (response) {
    setProfile(response.payload);
    dispatch(receiveData(response.payload));
  } else {
    setProfile(null);
    dispatch(requestFailed('Lấy thông tin thất bại!'));
  }
};

export const uploadAvatar = (dispatch) => async (avatar) => {
  dispatch(requestData());
  const data = {
    avatar,
  };
  const response = await api.postFormData('/user/upload-avatar', data);
  if (response) {
    const profile = await getProfile();
    setProfile({
      ...profile,
      avatar: response.payload.url,
    });
  } else {
    dispatch(requestFailed('Cập nhật ảnh đại diện thất bại!'));
  }
};

export const uploadInfo = (dispatch) => async (username, phone) => {
  dispatch(requestData());
  const data = {
    name: username,
    phone,
  };
  const response = await api.put('/user/update-profile', data);
  dispatch(requestFinish());
  if (response) {
    console.log('update info success', response);
    await setProfile(response.payload);
    dispatch(updateProfileSuccess('Cập nhật thông tin thành công!'));
  } else {
    dispatch(requestFailed('Cập nhật thông tin thất bại!'));
  }
};

export const updateEmail = (dispatch) => async (email) => {
  if (email.length === 0) {
    dispatch(requestFailed('Vui lòng nhập đủ thông tin!'));
    return;
  }
  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (reg.test(email) === false) {
    dispatch(requestFailed('Email không hợp lệ!'));
    return;
  }
  const data = {
    newEmail: email,
  };

  const response = await api.put('/user/change-user-email', data);
  if (response) {
    dispatch({
      type: CHANGE_EMAIL_SUCCESS,
    });
  } else {
    dispatch(requestFailed('Thay đổi thất bại! Email đã được sử dụng!'));
  }
};

export const updatePassword = (dispatch) => async (oldPass, newPass, confirmPass) => {
  if (oldPass.length === 0 || newPass.length === 0 || confirmPass.length === 0) {
    dispatch(requestFailed('Vui lòng nhập đủ thông tin!'));
    return;
  }
  if (confirmPass === newPass) {
    dispatch(requestData());
    const userInfo = await getUserInfo();
    if (userInfo) {
      const { id } = userInfo;
      const data = {
        id,
        oldPass,
        newPass,
      };

      const response = await api.post('/user/change-password', data);
      dispatch(requestFinish());
      if (response) {
        dispatch(changePassSuccess('Cập nhật mật khẩu thành công!'));
      } else {
        dispatch(requestFailed('Mật khẩu cũ không chính xác!'));
      }
    }
  } else {
    dispatch(requestFailed('Xác nhận mật khẩu không trùng khớp!'));
  }
};
