import React, { Component } from 'react';

class AddItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='add-item-container'>
        <button className='add-item-btn' onClick={this.createAddTaskForm}>Add Item</button>
      </div>
    )
  }
  createAddTaskForm() {
    console.log('AddTask');
    document.querySelector('.add-item-container').remove();
  }
}

export default AddItem;