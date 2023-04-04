import React from 'react'
// import App from './App';
{/* <App testId={1}/> */}

function Menu() {
  // const [currentTest, setCurrentTest] = React.useState(0); 
  // const selectTest = (id)=>{
  //   setCurrentTest(id)
  // }

  return (
    <div className='App'>
      <h1>Выберите тест 💡</h1>
      <ul className="main-menu">
        <li className="menu-item">Тест на знание Frontend</li>
        <li className="menu-item">Тест на знание React</li>
        <li className="menu-item">Интересные вопросы про автомобили</li>
        <li className="menu-item">Насколько хорошо, ты знаешь кинематограф</li>
        <li className="menu-item">Тест на историю</li>
        <li className="menu-item">Тест по основам школьной физики</li>
        <li className="menu-item">Как хорошо разбираешься в гаджетах и технике</li>
        <li className="menu-item">Знаешь ли ты игровую индустрию</li>
      </ul>
    </div>
  )
}

export default Menu