import React from'react'
import { ITodo } from '../interface'

type TodoLIStProps ={
    todos:ITodo[]
    toggleHendler(id:number):void
    removeHendler:(id:number)=>void
}

export const Todolist: React.FC <TodoLIStProps>=({todos,removeHendler,toggleHendler})=>{
    const classes = ['todo'];
    return(
        <ul >
            {todos.map(todo=>{
                const classes = ['todo'];
                if(todo.completed){
                    classes.push('completed');
                }
                return(
                <li className ={classes.join(' ')} >
                    <label htmlFor="">
                        <input type="checkbox" checked={todo.completed} 
                        onChange={toggleHendler.bind(null,todo.id)}/>
                        <span>{todo.title}</span>
                        <span onClick={()=>removeHendler(todo.id)}>Delete</span>
                    </label>
                 </li>
                )
            })}
            
        </ul>
    )
}