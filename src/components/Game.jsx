import React from 'react'
import tests from '../assets/tests'

function Game({ testId, step, question, onClickVariant }) {
  const currentTest = tests.find(el => (el.id === testId))
  const percentage = Math.round((step / currentTest.questions.length) * 100);

  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {
          question.variants.map((txt, i) => <li key={txt+i} onClick={()=>{onClickVariant(i)}}>{txt}</li>)
        }
      </ul>
    </>
  );
}

export default Game