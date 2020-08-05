/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useReducer } from 'react';
import AuthenReducer from '../../reducers/Authen';
import { requestLogin, requestRegister, requestForgotPass } from '../../actions/Authen';
import { RESET_REGISTER_STATUS, RESET_FORGOT_PASS_STATUS } from '../../constants/actions/Authen';

const AuthenContext = React.createContext();
const initialState = {
  /*
      0: do nothing
      1: success
      2: fail
  */
  loginStatus: 0,
  registerStatus: 0,
  forgotPassStatus: 0,
  isLoading: false,
  msg: '',
};
const AuthenProvider = (props) => {
  const [state, dispatch] = useReducer(AuthenReducer, initialState);
  const resetRegisterStatus = () => {
    dispatch({
      type: RESET_REGISTER_STATUS,
    });
  };
  const resetForgotPassStatus = () => {
    dispatch({
      type: RESET_FORGOT_PASS_STATUS,
    });
  };
  return (
    <AuthenContext.Provider
      value={
          {
            state,
            login: requestLogin(dispatch),
            register: requestRegister(dispatch),
            resetPassword: requestForgotPass(dispatch),
            resetRegisterStatus,
            resetForgotPassStatus,
          }
        }>
        {props.children}
    </AuthenContext.Provider>
  );
};
export { AuthenProvider, AuthenContext };
