import React from 'react';

const themes = {
  light: {
    type: 'LIGHT',
    headerBackground: '#fff',
    textColor: '#000',
    background: '#f5f5f5',
    itemBackground: '#fff',
    dividerLine: '#e2e2e2',
    overlayLayer1: '#ffffff00',
    overlayLayer2: '#f5f5f5ea',
    overlayLayer3: '#f5f5f5',
  },
  dark: {
    type: 'DARK',
    headerBackground: '#0f0f0f',
    textColor: '#fff',
    background: '#000',
    itemBackground: '#2f2f2f',
    dividerLine: '#2b2b2b',
    overlayLayer1: '#00000000',
    overlayLayer2: '#000000EA',
    overlayLayer3: '#000',
  },
};
export const ThemeContext = React.createContext(themes.light);

export default themes;
