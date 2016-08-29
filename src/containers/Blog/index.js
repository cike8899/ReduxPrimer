import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../../components/Header/blogHeader'
import Footer from '../../components/Footer/blogFooter'
import * as TodoActions from '../../actions/todos'
import style from './style.less'

class Blog extends Component {
  render() {
    const { todos, actions, children } = this.props
    return (
      <div>
        <Header/>
        {children}
        <Footer></Footer>
      </div>
    )
  }
}

Blog.propTypes = {
  todos: PropTypes.array,
  actions: PropTypes.object,
  children: PropTypes.node
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Blog)
