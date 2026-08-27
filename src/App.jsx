import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import './App.css'

import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, editTodo, getTodos, updateStatus } from './slices/todoSlice';

function App() {
  
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos );
  const filter = useSelector((state) => state.todo.filter); 
  const [isLoading,setIsLoading] = useState(false)


  const fetchTodos = async() => {
    try{
      setIsLoading(true);
      const response = await axios.get("todos");
      dispatch(getTodos(response.data));
    }
    catch(error){
      console.log(error);
    }
    finally{
      setIsLoading(false);
    }
  }
  
  const addTodoHandler = async(todoData) => {
    try{
      const response = await axios.post("todos",{
      todoName:todoData.name,
      todoDesc:todoData.desc,
      status:"Not Completed"
    })

    dispatch(addTodo(response.data));
    }
    catch(error){
      console.log(error);
    }
  }
  
  const updateStatusHandler = async(todoData) => {
    try{
      dispatch(updateStatus(todoData))
      await axios.put(`todos/${todoData.todoId}`,{
        status:todoData.todoStatus
      })
      
    }
    catch(error){
      console.log(error);
    }
  }

  const editTodoHandler = async(todoData) => {
    try{
      await axios.put(`todos/${todoData.todoId}`,{
        todoName:todoData.newName,
        todoDesc:todoData.newDesc
      })

      dispatch(editTodo(todoData));
    }
    catch(error){
      console.log(error);
    }
  }

  const deleteTodoHandler = async(todoId) => {
    try{
      
      const response = await axios.delete(`todos/${todoId}`)
       
      dispatch(deleteTodo(todoId));
    }
    catch(error){
      console.log(error);
    }
  }

  const filteredTodos = todos.filter((todo) => {
    if(filter === "all")  return true;
    return todo.status === filter;
  })

  useEffect(() => {
    fetchTodos();
  },[])
  return (
    <>
    {
      isLoading ? (<div>loading....</div>) :
    (<div className='container'>
      <h1>My Todo</h1>
      <Header  addTodo={addTodoHandler}/>
      <Main 
      deleteTodo={deleteTodoHandler}
      editTodo={editTodoHandler}
      updateStatus={updateStatusHandler}
      todos={filteredTodos} 
      filter={filter}
      dispatch={dispatch}
      />
    </div>)
    }
    
    </>
    
  )
}

export default App