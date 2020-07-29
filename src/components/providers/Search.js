/* eslint-disable react/prop-types */
import React, { useReducer } from 'react';
import searchReducer from '../../reducers/Search';
import { performSearch } from '../../actions/Search';

const SearchContext = React.createContext();

const initialState = {
  isLoading: false,
  searchResult: [],
  recentSeach: [],
  populars: [
    'Android',
    'React',
    'React Native',
    'Redux',
    'CSS',
    'Git',
    'Java',
  ],
};

const SearchProvider = (props) => {
  const [state, dispatch] = useReducer(searchReducer, initialState);
  return (
        <SearchContext.Provider value={
            {
              state,
              performSearch: performSearch(dispatch),
            }
        }>
            {props.children}
        </SearchContext.Provider>
  );
};

export { SearchContext, SearchProvider };
