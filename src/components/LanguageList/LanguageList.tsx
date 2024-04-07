import LanguageI from '../../@types/language';
import Language from './Language';

import './LanguageList.scss';

interface LanguageListProps {
  languages: LanguageI[];
  setCurrentLanguage: React.Dispatch<React.SetStateAction<LanguageI>>;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

function LanguageList({
  languages,
  setCurrentLanguage,
  inputValue,
  setInputValue,
}: LanguageListProps) {

  const arrayOfLanguages = languages.map((language) => (
    <Language
      key={language.id}
      language={language}
      setCurrentLanguage={setCurrentLanguage}
    />
  ));

  return (
    <div className="languages">
      <input
        className="languages-filterinput"
        type="text"
        placeholder="tape une langue"
        value={inputValue}
        onChange={(event) => {
          
          setInputValue(event.target.value);
        }}
      />
      <ul className="languages-list">{arrayOfLanguages}</ul>
    </div>
  );
}

export default LanguageList;