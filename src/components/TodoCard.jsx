import React, { useState } from 'react'

function TodoCard({todo,updateStatus,editTodo,deleteTodo}) {
  const [isEdit,setIsEdit] = useState(false);
  const [todoName,setTodoName] = useState(todo.todoName);
  const [todoDesc,setTodoDesc] = useState(todo.todoDesc);
  const handleUpdate = () => {
      editTodo({
        newName:todoName,
        newDesc:todoDesc,
        todoId:todo.id
      })
      setIsEdit(false);
    }
    

    return (
    <div className='todoContainer'>
      
      {
        isEdit ? (
          <>
          <p>Name:</p>
          <input type='text' value={todoName} onChange={(e)=>(setTodoName(e.target.value))}/>
          <p>Description:{todo.todoDesc}</p>
          <input type="text" value={todoDesc} onChange={(e) => (setTodoDesc(e.target.value))}/>
          </>
        ) : (
          <>
            <p>Name:{todo.todoName}</p>
            <p>Description:{todo.todoDesc}</p>
          </>
        )
      }
      <div className='completedStatus'>
        <p>Status:</p>
        <select value={todo.status} onChange={(e) =>(
          updateStatus({
          todoStatus:e.target.value,
          todoId:todo.id
        })
        )} className={todo.status === "Completed" ? "completed" : "notCompleted"}>
            <option value="Completed" className='completed'>Completed</option>
            <option value="Not Completed" className='notCompleted'>NotCompleted</option>
        </select>
        {
          isEdit && <button onClick={handleUpdate}>Update</button>
        }
      </div>
      <div className='btn'>
        <button onClick={() => (setIsEdit(true))}>Edit</button>
        <button onClick={() => {
          deleteTodo(todo.id)
        }}>Delete</button>
      </div>
    </div>
  )
}

export default TodoCard