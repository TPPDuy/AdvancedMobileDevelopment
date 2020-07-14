/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useReducer } from 'react';
import AuthorReducer from '../../reducers/Author';
import { getAuthorDetails } from '../../actions/Author';

const AuthorContext = React.createContext();
const initialState = {
  isLoading: false,
  authorDetails: {
    name: '',
    avatar: '',
    intro: '',
    phone: '',
    major: '',
  },
};
const AuthorProvider = (props) => {
  const [state, dispatch] = useReducer(AuthorReducer, initialState);
  return (
    <AuthorContext.Provider
      value={
          {
            state,
            getAuthorDetails: getAuthorDetails(dispatch),
          }
        }>
        {props.children}
    </AuthorContext.Provider>
  );
};
export { AuthorProvider, AuthorContext };
