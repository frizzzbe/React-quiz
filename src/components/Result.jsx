import React from 'react'
import questions from '../assets/questions'

function Result({correct, onReset}) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt="icon flat"/>
      <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
      <button onClick={()=>{onReset()}}>Попробовать снова</button>
    </div>
  );
}

export default Result