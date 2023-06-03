import React, { useState } from 'react';
import greetings from './Greetings';

const GreetingMessage = () => {
  const [currentLanguage, setCurrentLanguage] = useState(0);
  const languageKeys = Object.keys(greetings);

  const nextLanguage = () => {
    setCurrentLanguage((prevLanguage) => (prevLanguage + 1) % languageKeys.length);
  };

  return (
    <h1 className='greetings'>
      {languageKeys.map((languageKey, index) => (
        <React.Fragment key={index}>
          {index !== 0 && <span className='greeting-space'></span>}
          <span className={`greeting ${currentLanguage === index ? 'active' : ''}`}>{greetings[languageKey]}</span>
        </React.Fragment>
      ))}
    </h1>
  );
};

export default GreetingMessage;
