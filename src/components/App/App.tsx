
import { useState } from 'react';


import LanguageList from '../LanguageList/LanguageList';
import Header from '../Header/Header';
import DarkModeBtn from '../DarkModeBtn/DarkModeBtn';

import data from '../../data/greetings';

import './App.scss';
import Result from '../Result/Result';

const terre = require ('../../assets/terre.webp');


function App() {
  
  const [isDark, setIsDark] = useState(false);

  
  const [currentLanguage, setCurrentLanguage] = useState(data[10]);

  
  const [inputValue, setInputValue] = useState('');

   
  const filteredData = data.filter((language) => {
   
    const languageDescLower = language.description.toLowerCase();
    const searchStringLower = inputValue.toLowerCase();
    return languageDescLower.includes(searchStringLower);
  });

  return (
    <div className={isDark ? 'app app--dark' : 'app'}>
      <DarkModeBtn setIsDark={setIsDark} isDark={isDark} />

      <Header
      />
<div className='result-container'>
        <LanguageList
          languages={filteredData}
          setCurrentLanguage={setCurrentLanguage}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      
      <Result
        languageDescription={currentLanguage.description}
        languageGreetings={currentLanguage.greetings}
      />
      </div>
      
      <img className="terre" src={terre} alt="dessin de la terre avec des coeurs" />
    </div>
  );
}

export default App;