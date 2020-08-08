import React, { createContext, useState, useEffect } from 'react';
import languages from '../../constants/language';
import { getLanguage, storeLanguage } from '../../storage/Storage';

const LanguageContext = createContext(languages.eng);

const LanguageProvider = (props) => {
  const [state, setState] = useState(languages.eng);
  const changeLanguage = (value) => {
    if (value && value.status !== state.status) {
      setState(value);
      storeLanguage(value);
    }
  };

  useEffect(() => {
    async function loadLanguage() {
      const language = await getLanguage();
      if (language) {
        setState(language);
      }
    };

    loadLanguage();
  }, []);

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
