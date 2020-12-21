import React, { Component } from 'react';
import './App.css';
import Task from './components/Task';
import Title from './components/Title'
import AddItem from './components/AddItem';


class App extends Component {

  render() {
    return (
      <div className="App">
        <div id='list'>
          <Title />
          <Task task='Work' number='0' />
          <Task task='Groceries' number='1' />
          <Task task='Laundry' number='2' />
          <Task task='Work' number='3' />
          <AddItem />
        </div>
      </div>
    );
  }
  
}

export default App;
