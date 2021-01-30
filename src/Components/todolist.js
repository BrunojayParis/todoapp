import React from 'react';
//import components
import Todo from './todo';

const TodoList = ( {selectedTodos, todos, setTodos} ) =>{
    return(
        <div className = "todo_list">
            <ul>
                {selectedTodos.map(todo=> {
                    return <Todo todo ={todo} todos = {todos} setTodos= {setTodos} key ={todo.id} text = {todo.text} completed = {todo.completed}/>
                })}
            </ul>
            
        </div>
    )
}

export default TodoList;
