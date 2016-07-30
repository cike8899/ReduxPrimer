
import React, { Component } from 'react'
import classnames from 'classnames'
import style from './style.less'

class TodoTextInput extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      text: this.props.text || ''
    }
  }

  handleSubmit(e) {
    console.info("handleSubmit:",e.target.value);
    const text = e.target.value.trim()
    if (e.which === 13) {
      this.props.onSave(text)
      if (this.props.newTodo) {
        this.setState({ text: '' })
      }
    }
  }

  handleChange(e) {
    console.info("handleChange:",e.target.value)
    this.setState({ text: e.target.value })
  }

  handleBlur(e) {
    const text = e.target.value.trim()
    if (!this.props.newTodo) {
      this.props.onSave(text)
    }
  }
  handleOnKeyUp(e) {
    console.info("handleOnKeyUp:", this.state.text,e.target.value);
  }
  handleOnInput(e){
   console.info("handleOnInput:",e.target.value);
  }
  componentWillMount() {
    console.info("componetWillMount");
  }
  componentDidMount() {
    console.info("componentDidMount");
  }
  componentWillUnmount() {
    console.info("componentWillUnmount");
  }
  //更新组件状态,这些方法不会在首次 render 组件的周期调用
  componentWillReceiveProps(nextProps) {
    console.info("componentWillReceiveProps", nextProps);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.info("shouldComponentUpdate", "nextProps:", nextProps, "nextState:", nextState);
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.info("componentWillUpdate", "nextProps:", nextProps, "nextState：", nextState);
  }
  componentDidUpdate(prevProps, prevState) {
    console.info("componentDidUpdate", "prevProps：", prevProps, "prevState:", prevState);
  }
  render() {
    console.info("render");
    const classes = classnames({
      [style.edit]: this.props.editing,
      [style.new]: this.props.newTodo
    }, style.normal)

    return (
      <input className={classes}
        type="text"
        autoFocus="true"
        placeholder={this.props.placeholder}
        value={this.state.text}
        onBlur={::this.handleBlur}
  onChange = {::this.handleChange }
  onKeyDown = {::this.handleSubmit }
  onKeyUp = {::this.handleOnKeyUp }
  onInput={::this.handleOnInput}
  />
    )
}
}

export default TodoTextInput
