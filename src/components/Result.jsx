import React from 'react'
import tests from '../assets/tests'
import congrats from '../assets/images/congrats.png'
import { useDispatch } from 'react-redux'
import { setRightAnswers } from '../redux/slices/questionsSlice';
import { useSelector } from 'react-redux';
// import useWhyDidYouUpdate from 'ahooks/lib/useWhyDidYouUpdate';

const Result = (({correct, onReset}) => {
  const testId = useSelector((state) => state.questions.testId)
  const dispatch = useDispatch();
  const countOfQuestions = tests.find(el => (el.id === testId)).questions.length

  React.useEffect(()=>{
    console.log('render answer')
    dispatch(setRightAnswers({testId, correct, countOfQuestions}))
  }, [])

  return (
    <div className="result">
      <img src={congrats} alt="Congratulations"/>
      <h2>Вы ответили {correct} из {countOfQuestions}</h2>
      <button onClick={()=>onReset()}>Назад к тестам</button>
    </div>
  );
});

export default Result