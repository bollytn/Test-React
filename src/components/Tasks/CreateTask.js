import React from "react";

function CreateTask(props) {

    return(
      <>
      <input value={props.value} onChange={props.updateNewTask}/>
      <button onClick={props.addTask}>Add task</button>
      </>
    );
  
  }

export default CreateTask;  