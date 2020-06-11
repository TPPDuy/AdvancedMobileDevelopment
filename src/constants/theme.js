import React from 'react';

const themes = {
  light: {
    type: 'LIGHT',
    headerBackground: '#fff',
    textColor: '#000',
    background: '#f5f5f5',
    itemBackground: 'fff',
  },
  dark: {
    type: 'DARK',
    headerBackground: '#0f0f0f',
    textColor: '#fff',
    background: '#000',
    itemBackground: '#2f2f2f',
  },
};
export const ThemeContext = React.createContext(themes.light);

export default themes;
