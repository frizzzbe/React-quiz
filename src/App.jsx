import React from 'react';
import tests from './assets/tests'
import Result from './components/Result'
import Game from './components/Game'
import { useSelector } from 'react-redux';
import Menu from './components/Menu';

function App() {
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const testId = useSelector((state) => state.questions.testId)
  const currentTest = tests.find(el => (el.id === testId))
  if (currentTest === undefined) {
    return (<div className="App">
      <Menu/>
    </div>)
  } 
  const question = currentTest.questions[step]; // текущий вопрос

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
        (step !== currentTest.questions.length) ? (
          <Game step={step} question={question} onClickVariant={onClickVariant} testId={testId}/>
        ) : (
          <Result correct={correct} testId={testId} onReset={resetGame}/>
        )
      }
    </div>
  );
}

export default App;
