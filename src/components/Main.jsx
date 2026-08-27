import React from 'react'
import TodoCard from './TodoCard'
import { setFilter } from '../slices/todoSlice';


function Main({todos,filter,updateStatus,editTodo,deleteTodo,dispatch}) {
  return (
    <>
    <div className='mainContainer1'>
        <div className='mainContainer'>
      <div className='leftMain'>
        <p>My Todos:</p>
      </div>
      <div className='rightMain'>
        <div>
            <p>Status Filter:</p>
        </div>
        <div>
            <select onChange={(e) => {
            dispatch(setFilter(e.target.value));
            }} className={ filter === "Completed"? "completed": filter === "Not Completed"? "notCompleted" : "all"}>
                <option value="all" className='all'>All</option>
                <option value="Completed" className='completed'>Completed</option>
                <option  value="Not Completed" className='notCompleted'>Not Completed</option>
            </select>
        </div>
      </div>
    </div >
    {
      todos.length === 0 ? 
      <div className='heading'>
        <h1>Welcome to Todo app</h1>
      </div>
       
      : 
      <div className='todoCard'>
      {
        todos.map((todo) =>(
          <TodoCard 
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          updateStatus={updateStatus}
          key={todo.id} 
          todo={todo}
        />
        ))
        
      }
    </div>
    }
    
    
    </div>
    </>
    
    
  )
}

export default Main