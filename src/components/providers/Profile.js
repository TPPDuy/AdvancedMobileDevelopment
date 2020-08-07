/* eslint-disable react/prop-types */
import React, { useReducer } from 'react';
import profileReducer from '../../reducers/Profile';
import {
  fetchProfile,
  uploadAvatar,
  uploadInfo,
  updateEmail,
  updatePassword,
} from '../../actions/Profile';
import { RESET_STATUS } from '../../constants/actions/Profile';

const ProfileContext = React.createContext();
const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  msg: '',
};
const ProfileProvider = (props) => {
  const [state, dispatch] = useReducer(profileReducer, initialState);
  const resetStatus = () => {
    dispatch({
      type: RESET_STATUS,
    });
  };
  return (
        <ProfileContext.Provider value = {{
          state,
          resetStatus,
          getProfile: fetchProfile(dispatch),
          uploadAvatar: uploadAvatar(dispatch),
          uploadInfo: uploadInfo(dispatch),
          updateEmail: updateEmail(dispatch),
          updatePassword: updatePassword(dispatch),
        }}>
            {props.children}
        </ProfileContext.Provider>
  );
};

export { ProfileProvider, ProfileContext };
