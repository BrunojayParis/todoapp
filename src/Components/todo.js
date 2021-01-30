import React from 'react';
import Button from '@material-ui/core/Button';

const Todo = ({text, todos, todo, setTodos}) =>{
    const deleteButton = ()=>{
        return setTodos( todos.filter(el => todo.id !== el.id ))

    }
    const completedButton =()=>{
        return setTodos(todos.map( item =>{
            if (todo.id === item.id){
                return {...item, completed : !item.completed};
            }
            return item;
        }
        ))

    }
        

    return(
        <div className="todo_conteiner" >
            <li className="todo_item" >{text}</li>
            <div className="buttons">
            <Button variant="contained" color="primary" onClick = {deleteButton }className="delete_button">DELETE</Button>
            <Button variant="contained" color="secondary" onClick = {completedButton}className="completed-button">Completed</Button>
            </div>
        </div>
    )
}
 
export default Todo;
