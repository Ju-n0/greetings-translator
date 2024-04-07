import './Result.scss';

interface ResultProps {
  languageDescription: string;
  languageGreetings: string;
}

function Result({ languageDescription, languageGreetings }: ResultProps) {
  return (
    <div className="result">
      <div className="result-greetings">{languageGreetings} ! </div>
      <div className="result-language">{languageDescription}</div>
    </div>
  );
}

export default Result;