import React, { useState } from 'react'

function Header({addTodo}) {
  const [todoName,setTodoName] = useState("");
  const [todoDesc,settodoDesc] = useState("")

  function handleClick(){

    addTodo({
      name:todoName,
      desc:todoDesc
    })

    // dispatch({
    //   type:"ADD_TODO",
    //   payload:{
    //     name:todoName,
    //     desc:todoDesc
    //   }
    // })
    settodoDesc("");
    setTodoName("");
  }

  return (
    <div className='headerContainer'>
        <input type="text" placeholder='Todo Name' value={todoName} onChange={(e)=>(setTodoName(e.target.value))}/>
        <input type="text" placeholder='Todo Discription' value={todoDesc} onChange={(e) => (settodoDesc(e.target.value))}/>
        <button onClick={handleClick}>Add Todo</button>
    
    </div>
  )
}

export default Header