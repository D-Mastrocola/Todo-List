import React, { Component } from 'react';

class Task extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li className="list-task" onClick={this.completeTask}>
        <label className="checkbox" >
          <input className='selector' type="checkbox" />
          <span className='checkmark'></span>
          <h3 className="task">{this.props.task}</h3>
        </label>
        <img className='trash-can' src="/images/trashcan.png" alt='delete' onClick={this.deleteTask}/>
      </li>
    )
  }
  completeTask() {
    let tasks = document.querySelectorAll('.selector');
    for (let i = 0; i < tasks.length; i++) {
      let checked = tasks[i].checked;
      let textStyle = document.querySelector('.task').style;
      if (checked) {
        textStyle.textDecoration = 'line-through';
        textStyle.opacity = .5;
      }
      else {
        textStyle.textDecoration = 'none';
        textStyle.opacity = 1;
      }
    }
  }

  deleteTask() {
    console.log('delete');
    document.querySelector('.list-task').remove();
  }
}


export default Task;


