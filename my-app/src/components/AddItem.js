import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Task from './Task';
import anime from '../anime.es';

class AddItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='add-item-container'>
        <input className='add-item-input' type='text' placeholder='Enter something here...'></input>
        <button className='add-item-btn' onClick={() => this.addTask()}>Add Item</button>
      </div>
    )
  }
  addTask() {
    let newTask = document.querySelector('.add-item-input').value;
    let number = document.querySelectorAll('#list')[0].children.length - 1;
    if (newTask !== '') {
      console.log(newTask);
      document.querySelector('.add-item-input').value = '';
      let task = React.createElement(
        Task,
        {number: number, task: newTask}
      )
      console.log(task)
      document.getElementById('list').append(task);
      /*anime.timeline()
      .add({
        targets: '.add-item-btn',
        height:
      })*/
    }
  }
}
  export default AddItem;