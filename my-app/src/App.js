import React, { Component } from 'react';
import './App.css';
import Task from './components/Task';
import Title from './components/Title'


class App extends Component {

  render() {
    return (
      <div className="App">
        <div className='list'>
          <Title />
          <Task task='Eat'/>
          <Task task='Shower'/>
          <Task task='Groceries'/>
          <Task task='Work'/>
          <Task task='Eat Again'/>
          <Task task='Sleep'/>
        </div>
      </div>
    );
  }
  
}

export default App;
