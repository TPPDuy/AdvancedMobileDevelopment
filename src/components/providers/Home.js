/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useReducer } from 'react';
import HomeReducer from '../../reducers/Home';
import { REQUEST_DATA } from '../../constants/actions/Home';
import requestData from '../../actions/Home';

const HomeContext = React.createContext();
const initialState = {
  topSell: [],
  topNew: [],
  topRate: [],
  isLoading: false,
};
const HomeProvider = (props) => {
  const [state, dispatch] = useReducer(HomeReducer, initialState);
  return (
    <HomeContext.Provider
      value={
          {
            state,
            getData: requestData(dispatch),
          }
        }>
        {props.children}
    </HomeContext.Provider>
  );
};
export { HomeProvider, HomeContext };
