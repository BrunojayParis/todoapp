import React, { useState, useEffect } from 'react';
import './App.css';
//import components
import Form from './Components/Form';
import TodoList from './Components/todolist';



function App() {
//useState
  const [imputText, setImputText] = useState("");//state of the form's input.
  const [todos, setTodos] = useState([]);// state of the todos.
  const [status, setStatus] = useState("All");//state of the selector 
  const [selectedTodos, setSelectedtodos] = useState([]);//state for the status filter
//useEffect
  useEffect(()=>{
    selected();
  },[todos, status])

    //Functions 
  const selected = ()=>{
    switch(status){
      case "Done":
        setSelectedtodos(todos.filter(todo => todo.completed === true));
        break;
      case "Not Done":
        setSelectedtodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setSelectedtodos(todos);
        break;  
    }
  }



  return (
    <div className="App">
      <header>
     <h1>TO DO LIST </h1>
     </header>
     <Form imputText ={imputText} setStatus={setStatus} setImputText= {setImputText} todos={todos} setTodos={setTodos} />
     <TodoList selectedTodos= {selectedTodos}  todos = {todos} setTodos= {setTodos} />
    </div>
  );
}

export default App;
