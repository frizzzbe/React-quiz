import React from 'react'
import tests from '../assets/tests'
import congrats from '../assets/images/congrats.png'
import { useDispatch } from 'react-redux'
import { setTestId } from '../redux/slices/questionsSlice';

function Result({correct, testId, onReset}) {
  const dispatch = useDispatch();
  const currentTest = tests.find(el => (el.id === testId))
  return (
    <div className="result">
      <img src={congrats} alt="Congratulations"/>
      <h2>Вы отгадали {correct} ответа из {currentTest.questions.length}</h2>
      <button onClick={()=>{
        onReset();
        dispatch(setTestId(-1));
      }}>Назад к тестам</button>
    </div>
  );
}

export default Result