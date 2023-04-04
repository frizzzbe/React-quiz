import React from 'react';
import './index.scss';
import questions from './assets/questions'
import Result from './components/Result'
import Game from './components/Game'

function App() {
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const question = questions[step]; // текущий вопрос

  const onClickVariant = (index) => {
    setStep(step + 1);
    if (index === question.correct) {
      setCorrect(correct + 1)
    }
  }

  const resetGame = () => {
    setStep(0);
    setCorrect(0);
  }

  return (
    <div className="App">
      {
        (step !== questions.length) ? (
          <Game step={step} question={question} onClickVariant={onClickVariant}/>
        ) : (
          <Result correct={correct} onReset={resetGame}/>
        )
      }
    </div>
  );
}

export default App;
