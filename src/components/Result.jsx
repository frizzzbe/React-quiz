import React from 'react'
import tests from '../assets/tests'
import congrats from '../assets/images/congrats.png'

function Result({correct, testId, onReset}) {
  const currentTest = tests.find(el => (el.id === testId))
  return (
    <div className="result">
      <img src={congrats} alt="Congratulations"/>
      <h2>Вы отгадали {correct} ответа из {currentTest.questions.length}</h2>
      <button onClick={()=>{onReset()}}>Попробовать снова</button>
    </div>
  );
}

export default Result