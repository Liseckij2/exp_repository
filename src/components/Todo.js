import React, {useState} from "react";
import TodoForm from "./TodoForm"
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { IoMdCreate } from 'react-icons/io';

function Todo({todos, completeTodo, removeTodo}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })
    return todos.map((todo, index) => (

        <div
            className={todo.isComplete ? 'todo-row complate' : 'todo-row'}
            key={index}
        >
            <div
                key={todo.id}
                onClick={() => completeTodo(todo.id)}
            >
                {todo.text}
            <
     /div>

            <div className='icons'>
             <AiOutlineCloseCircle
             onClick={() => removeTodo(todo.id)}
             className='delete-icon'
             />
            <IoMdCreate
                onClick={() => setEdit({id: todo.id,value: todo.text})}
                className='edit-icon'
            />
            </div>
        </div>


    ))
}
export default Todo