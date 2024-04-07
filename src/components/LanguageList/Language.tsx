import LanguageI from '../../../src/@types/language';

interface LanguageProps {
  language: LanguageI;
  setCurrentLanguage: React.Dispatch<React.SetStateAction<LanguageI>>;
}

function Language({ language, setCurrentLanguage }: LanguageProps) {
  return (
    <li className="languages-item" key={language.id}>
      <button
        className="languages-btn"
        type="button"
        onClick={() => {
                   setCurrentLanguage(language);
        }}
      >
        {language.description}
      </button>
    </li>
  );
}

export default Language;