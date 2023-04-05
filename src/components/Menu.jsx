import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTestId } from "../redux/slices/questionsSlice";
import tests from "../assets/tests";

function Menu() {
  const dispatch = useDispatch();
  const rightAnswers = useSelector((state) => state.questions.rightAnswers);
  const selectTest = (id) => {
    dispatch(setTestId(id));
  };

  return (
    <div>
      <h1 className="main-title">Выберите тест 💡</h1>
      <ul className="main-menu">
        {tests.map((el) => {
          let findAnswer = rightAnswers.find(obj => obj.testId === el.id);
          return (
            <li
              key={el.id}
              onClick={() => selectTest(el.id)}
              className="menu-item"
            >
              <div className="menu-title">{el.title}</div> {findAnswer ? <div className="score-info">{findAnswer.correct + '/' + findAnswer.countOfQuestions}</div> : ''}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Menu;
