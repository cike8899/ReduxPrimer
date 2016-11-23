import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../../components/Header/blogHeader'
import Footer from '../../components/Footer/blogFooter'
import MainSection from '../../components/MainSection/blogMainContent'
import * as TodoActions from '../../actions/todos'
import * as NotesActions from '../../actions/notes';
import * as NoteActions from '../../actions/note';
import style from './style.less'

class Blog extends Component {
  render() {
    const { todos, actions, children, notes, note} = this.props
    return (
      <div>
        <Header />
        {React.Children.map(children, (ele, idx) => {//动态为children添加props
          return (
            React.cloneElement(ele, {
              actions, notes, note
            })
          );
        })}
        <Footer></Footer>
      </div>
    )
  }
}

Blog.propTypes = {
  todos: PropTypes.array,
  notes: PropTypes.array,
  note: PropTypes.object,
  actions: PropTypes.object,
  children: PropTypes.node
}

function mapStateToProps(state) {
  return {
    todos: state.todos,
    notes: state.notes,
    note: state.note
  }
}

let allActions = Object.assign({}, NotesActions, NoteActions);

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(allActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Blog)
