import React from "react";
import { useDispatch } from "react-redux";
import { setTestId } from "../redux/slices/questionsSlice";
import tests from "../assets/tests";

function Menu() {
  const dispatch = useDispatch();
  const selectTest = (id)=>{
    dispatch(setTestId(id))
  }

  return (
    <div>
      <h1>Выберите тест 💡</h1>
      <ul className="main-menu">
        {
          tests.map(el => <li key={el.id} onClick={()=>selectTest(el.id)} className="menu-item">{el.title} <div className="score-info">7/10</div></li>)
        }
      </ul>
    </div>
  );
}

export default Menu;