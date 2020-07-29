/* eslint-disable react/prop-types */
import React, { useReducer } from 'react';
import profileReducer from '../../reducers/Profile';
import { fetchProfile } from '../../actions/Profile';

const ProfileContext = React.createContext();

const ProfileProvider = (props) => {
  const [state, dispatch] = useReducer(profileReducer);
  return (
        <ProfileContext.Provider value = {{
          state,
          getProfile: fetchProfile(dispatch),
        }
        }>
            {props.children}
        </ProfileContext.Provider>
  );
};

export { ProfileProvider, ProfileContext };
