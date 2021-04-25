import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { TodoForm } from './components/TodoForm';
import { Todolist } from './components/TodoList';
import { ITodo } from './interface';

const App:React.FC=()=> {
  Date.now()
  const [todos,setTodos] = useState<ITodo[]>([]);

  const addHendler=(title:string)=>{
    const newTodo={
      title,
      id:Date.now(),
      completed :false
    }
    //setTodos([newTodo,...todos]);
    setTodos(prev=>[newTodo,...prev])
  }
  
  const toggleHendler =(id:number)=>{
    setTodos(prev=>
      prev.map(todo=>{
        if(todo.id === id){
          todo.completed = !todo.completed;
        }
        return todo;
    }))
  }

  const removeHendler = (id:number)=>{
    setTodos(prev=>prev.filter(todo=>todo.id !== id))
  }

  return (
    <div>
      <Navbar/>
      <div className ='container'>
        <TodoForm onAdd={addHendler}/>
        <Todolist todos = {todos}
        toggleHendler={toggleHendler}
        removeHendler={removeHendler}/>
      </div>
    </div>
  );
}

export default App;
