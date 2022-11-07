import { useState } from 'react'

function ToDoList() {

  return (
    
    <div className="Navbar">
    <br></br>
    <div className="background">
    <div className="background">
    <form action="/http://127.0.0.1:5174/todolist">
    <input type="submit" value="WHITE"/>
    <input type="submit" value="PURPLE"/>
    <input type="submit" value="BLUE"/>
  </form>
</div>
    <br></br>
    <br></br>
  </div>
      <h1>JUST DO IT LA.</h1>
      <div className="input">
      <form action="/http://127.0.0.1:5174/todolist">
      <input type="text" id="addtask" name="addtask" value="ADD TASK"/>
      <input type="submit" value="STEADY LA!"/>
    </form>
  </div>
      <br></br>
    <br></br>
<h2>Insert DD/MM/YYYY and XXXXH here.</h2>
</div>
    

  )
}

export default ToDoList
