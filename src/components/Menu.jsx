import React from "react";
import { useDispatch } from "react-redux";
import { setTestId } from "../redux/slices/questionsSlice";
import tests from "../assets/tests";

// {/* <li onClick={()=>selectTest(0)} className="menu-item">Тест на знание Frontend</li>
// <li onClick={()=>selectTest(1)} className="menu-item">Тест на знание React</li>
// <li onClick={()=>selectTest(2)} className="menu-item">Интересные вопросы про автомобили</li>
// <li onClick={()=>selectTest(3)} className="menu-item">Насколько хорошо, ты знаешь кинематограф</li>
// <li onClick={()=>selectTest(4)} className="menu-item">Тест на историю</li>
// <li onClick={()=>selectTest(5)} className="menu-item">Тест по основам школьной физики</li>
// <li onClick={()=>selectTest(6)} className="menu-item">Как хорошо разбираешься в гаджетах и технике</li>
// <li onClick={()=>selectTest(7)} className="menu-item">Знаешь ли ты игровую индустрию</li> */}

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
          tests.map(el => <li key={el.id} onClick={()=>selectTest(el.id)} className="menu-item">{el.title}</li>)
        }
      </ul>
    </div>
  );
}

export default Menu;