import React, { Component } from 'react';
import anime from '../anime.es.js';


class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 'list-' + this.props.number,
      task: this.props.task,
      id: this.props.number,
      selectorId: 'selector' + this.props.number,
      textId: 'task' + this.props.number
    }
  }
  render() {
    return (
      <li className="list-task" id={this.state.number} onClick={() => this.completeTask()}>
        <label className="checkbox" >
          <input className='selector' id={this.state.selectorId} type="checkbox" />
          <span className='checkmark'></span>
          <h3 className="task" id={this.state.textId} >{this.state.task}</h3>
        </label>
        <img className='trash-can' src="/images/trashcan.png" alt='delete' onClick={() => this.deleteTask()} />
      </li>
    )
  }
  completeTask() {
    
    let task = document.querySelectorAll('#' + this.state.selectorId);
    console.log(task)
    for (let i = 0; i < task.length; i++) {
      let checked = task[i].checked;
      let textStyle = document.querySelectorAll('#' + this.state.textId)[0].style;
      console.log(textStyle)
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
  removeTask(task) {
    task.remove();
    return 1;
  }
  deleteTask() {
    let task = document.getElementById(this.state.number);
    task.innerHTML = ''
    anime.timeline()
      .add({
        targets: task,
        height: 0,
        padding: 0,
        duration: 5000,
        ease: 'linear'
      })
  }
}


export default Task;


