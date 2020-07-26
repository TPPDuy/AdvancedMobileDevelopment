/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useReducer } from 'react';
import favoriteReducer from '../../reducers/Favorite';
import { fetchFavorite } from '../../actions/Favorite';

const FavoriteContext = React.createContext();
const initialState = {
  isLoading: false,
  favorites: [],
};
const FavoriteProvider = (props) => {
  const [state, dispatch] = useReducer(favoriteReducer, initialState);
  return (
    <FavoriteContext.Provider
      value={
          {
            state,
            getData: fetchFavorite(dispatch),
          }
        }>
        {props.children}
    </FavoriteContext.Provider>
  );
};
export { FavoriteProvider, FavoriteContext };
