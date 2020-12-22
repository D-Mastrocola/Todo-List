import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Task from './components/Task';
import Title from './components/Title'


const App = () => {
  const [taskList, setTaskList] = useState([]);
  function addTask(event) {
    let input = document.querySelector('.add-item-input');
    setTaskList(taskList.concat(<Task task={input.value} key={taskList.length} number={taskList.length} />))
    input.value = '';
};
return (
  <div className="App">
    <div id='list'>
      <Title />
      <Task task="Eat" number='plac0'/>
      <Task task="Work" number='plac1'/>
      <Task task="Code" number='plac2'/>
      <Task task="Sleep" number='plac3'/>
      {taskList}
    </div>
    <div className='add-item-container'>
      <input className='add-item-input' type='text' placeholder='Enter something here...'></input>
      <button className='add-item-btn' onClick={() => addTask()}>Add Item</button>
    </div>
  </div>
);



}

export default App;
