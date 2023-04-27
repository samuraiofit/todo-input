import { useState } from 'react';
import Checkbox from './Checkbox.jsx';
import './App.css';


function App() {
  const [todos, setTodos] = useState([
    {
      text: "Html",
      done: false
    }, 
    {
      text: "Scss",
      done: false
    },
    {
      text: "React",
      done: false
    },

  ]);

  const [text, setText] = useState("")

  function handlerChange(e){
    setText(e.target.value);
  }
  
  const [check, setCheck] = useState(false);
  function handlerChanges() {
    setCheck(!check)
  }

  function handlerBtn(done) {
    setTodos([
      {
        text: text,
        done: check,
      },
      ...todos,
    ]);
    setText("");
    setCheck(false);
  }


return (
   <div>
    <div>
      <input 
      type='text' 
      value={text} 
      onChange={handlerChange}/>
      <button onClick={handlerBtn}>
      add</button>
      <Checkbox check={check} handlerChanges={handlerChanges}/>
    </div>
    {
      todos.map((item, idx) => {
      return(
        <div>
      <li key={idx}>
        {item.text}
      </li>
      <input type='checkbox' checked={item.done}/>
      </div>
      );
      })
    }
   </div>
);
}

export default App;