import React, { PropTypes, Component } from 'react'
import Task from './task.component'

export default class TaskList extends Component {

    createTask() {
       /* const link = ['/edit', this.task.id];
        this.router.navigate(link);*/
    }
    render() {
        const { tasks } = this.props
        var tasksTemplate;

        if (tasks!=null && tasks.length > 0) {
            tasksTemplate = tasks.map(function (item, index) {
                return (
                    <div key={index}>
                        <Task task={item} />
                    </div>
                )
            })
        } else {
            tasksTemplate = <p>Sorry, but tasks are missing</p>
        }

        return <div className='container'>
            <button className='btn btn-primary' onClick={this.createTask()}>New Task</button>
            {tasksTemplate}
        </div>
    }
}

TaskList.propTypes = {
    tasks: PropTypes.array
}