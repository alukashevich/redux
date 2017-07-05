import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import TaskList from '../components/tasks/task-list.component'
import * as tasksActions from '../actions/tasks.actions'

class App extends Component {

  componentDidMount() {
    this.props.tasksActions.getTasks();
  }

  render() {

    const { taskList } = this.props
    //const { getTasks } = this.props.getTasks

    return <div className='container'>
      <TaskList tasks={taskList.tasks} />
    </div>
  }

}

function mapStateToProps(state) {
  return {
    taskList: state.task
  }
}

function mapDispatchToProps(dispatch) {
  return {
    tasksActions: bindActionCreators(tasksActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)