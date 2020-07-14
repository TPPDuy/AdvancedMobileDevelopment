/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useReducer } from 'react';
import BrowseReducer from '../../reducers/Browse';
import {
  getCategory,
  getAuthor,
  getCategoryDetails,
  getTopNew,
} from '../../actions/Browse';

const BrowseContext = React.createContext();
const initialState = {
  categories: [],
  authors: [],
  topNew: [],
  isLoading: false,
  categoryDetails: [],
};
const BrowseProvider = (props) => {
  const [state, dispatch] = useReducer(BrowseReducer, initialState);
  return (
    <BrowseContext.Provider
      value={
          {
            state,
            getCategory: getCategory(dispatch),
            getAuthor: getAuthor(dispatch),
            getCategoryDetails: getCategoryDetails(dispatch),
            getTopNew: getTopNew(dispatch),
          }
        }>
        {props.children}
    </BrowseContext.Provider>
  );
};
export { BrowseProvider, BrowseContext };
