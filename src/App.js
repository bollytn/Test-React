import React, { Component } from 'react';
import './App.css';
import Task from './components/Task';
import CreateTask from './components/CreateTask';

class App extends Component {

  state = {
    newTask:'',
    todos : [
      {text : 'learn reactJS'},
      {text : 'learn NodeJS'},
      {text : 'learn javascript'},
      {text : 'learn html et css'},
    ]
  }

  completeTask = (index) => {
    const todos = [...this.state.todos];
    todos.splice(index,1);
    this.setState({todos})
  }

  addTask = () => {
    const todos = [...this.state.todos];
    todos.push({
      text:this.state.newTask
    })
    this.setState({
      todos,
      newTask:''
    })   
  }

  updateNewTask = (e) => {
    this.setState({
      newTask:e.target.value
    });
  }

    render() {
      return(
        <div className='App'>
          {this.state.todos.map((todo,index) => <Task todo={todo} index={index} key={index} completeTask={() => {this.completeTask(index)}} />)}

        <CreateTask value={this.state.newTask} updateNewTask={this.updateNewTask} addTask={this.addTask}/>
        </div>
      );
    }
}

export default App;
