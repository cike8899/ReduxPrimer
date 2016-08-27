
import React, { Component } from 'react'
import TodoTextInput from '../TodoTextInput'
import classnames from 'classnames'
import style from './style.less'
import onfire from 'onfire.js';

class TodoItem extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      editing: false
    }
    onfire.on("test_event", this.test_callback);
  }

  test_callback(data1, data2) {
    console.info('this is a event 1', data1, data2);
  }

  handleDoubleClick() {
    this.setState({ editing: true })
  }

  handleSave(id, text) {
    if (text.length === 0) {
      this.props.deleteTodo(id)
    } else {
      this.props.editTodo({ id, text })
    }
    this.setState({ editing: false })
  }

  render() {
    const {todo, completeTodo, deleteTodo} = this.props

    let element
    if (this.state.editing) {
      element = (
        <TodoTextInput text={todo.text}
          editing={this.state.editing}
          onSave={(text) => this.handleSave(todo.id, text) } />
      )
    } else {
      element = (
        <div className={style.view}>
          <input className={style.toggle}
            type="checkbox"
            checked={todo.completed}
            onChange={() => completeTodo(todo.id) } />

          <label onDoubleClick={:: this.handleDoubleClick}>
          {todo.text}
          </label>

        <button className={style.destroy} onClick={() => deleteTodo(todo.id) } />
        </div >
      )
    }

    // TODO: compose
    const classes = classnames({
      [style.completed]: todo.completed,
      [style.editing]: this.state.editing,
      [style.normal]: !this.state.editing
    })

    return (
      <li className={classes}>
        {element}
      </li>
    )
  }
  
}

export default TodoItem
