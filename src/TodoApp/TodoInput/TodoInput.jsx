import React, { Component } from 'react';

class TodoInput extends Component {
  constructor(){
    super();
    this.state = {
      text:''
    };
    this.updateText = this.updateText.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  updateText({target}){
      this.setState({ 
        text: target.value
      });

  };

  addTodo(){
    this.props.addTodo(this.state.text);
    this.inputRef.value = '';
  }

  render(){
    const add = this.state.text ? this.addTodo : () => {};
    return(
      <div className='input-container'>
        <div className='newtodo-input'>
            <input ref={el => this.inputRef = el} type='text' placeholder='Add a new todo!' onChange={this.updateText}/>
        </div>
        <div className='button-add' onClick={add}>Add</div>
      </div>
    );
  }
}

export default TodoInput;