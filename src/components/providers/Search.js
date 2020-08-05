/* eslint-disable react/prop-types */
import React, { useReducer, useEffect } from 'react';
import searchReducer from '../../reducers/Search';
import { performSearch } from '../../actions/Search';
import { getSearchHistory, clearSearchHistory } from '../../storage/Storage';
import { RECEIVE_RECENT_SEARCH, CLEAR_RECENT_SEARCH } from '../../constants/actions/Search';

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
  useEffect(() => {
    async function getRecentSearch() {
      const history = await getSearchHistory();
      if (history) dispatch({
        type: RECEIVE_RECENT_SEARCH,
        data: history,
      });
    }
    getRecentSearch();
  }, []);

  const clearRecentSearch = async () => {
    await clearSearchHistory();
    dispatch({
      type: CLEAR_RECENT_SEARCH,
    });
  }
  return (
        <SearchContext.Provider value={
            {
              state,
              performSearch: performSearch(dispatch),
              clearRecentSearch,
            }
        }>
            {props.children}
        </SearchContext.Provider>
  );
};

export { SearchContext, SearchProvider };
