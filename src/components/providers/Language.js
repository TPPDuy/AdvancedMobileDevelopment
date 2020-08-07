import React, { createContext, useState } from 'react';
import languages from '../../constants/language';

const LanguageContext = createContext(languages.eng);

const LanguageProvider = (props) => {
  const [state, setState] = useState(languages.eng);
  const changeLanguage = (value) => {
    if (value && value.status !== state.status) {
      setState(value);
    }
  };
  return (
        <LanguageContext.Provider
            value={{
              state,
              changeLanguage,
            }}>
            {props.children}
        </LanguageContext.Provider>
  );
};

export { LanguageContext, LanguageProvider };
