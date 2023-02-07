import './App.css';
import { useState } from 'react';

function App() {
  const [todoArr, setTodoApp] = useState([]);
  const [text, setTodoText] = useState('');
  
  const push = () => {
    todoArr.push(text);
    setTodoText("")
    console.log(todoArr);
    setTodoApp([...todoArr])
  }

  const allDelete = () => {
    setTodoApp([])
    console.log(todoArr)
    }

  return (
    <div className="App">
      <header className="App-header">
        <input
          onChange={p => {
            setTodoText(p.target.value);
          }}
          value={text}
          type="text"
          placeholder='Enter text'
          name="" id=""
          />
          <ul>
        {todoArr.map((t , g) => {
          function deleteTodo(){
            setTodoApp(todoArr.filter(del => del !== t))
          }          
          return (
          <li key={g}>{t} <button onClick={deleteTodo}> DELETE </button></li>
          ) 
        })}
        </ul>
        <button onClick={push}> PUSH </button>
        <button onClick={allDelete}> ALL DELETE </button>
      </header>
    </div>
  );
}

export default App;
