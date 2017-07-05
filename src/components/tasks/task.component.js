import React, { PropTypes, Component } from 'react'

export default class Task extends Component {

    completeTask(){
        //this.onComplete.emit(this.task);
    }

    editTask() {
        //const link = ['/edit', this.task.id];
        //this.router.navigate(link);
    }

    deleteTask() {
        //this.onDelete.emit(this.task);
    }


    render() {
        const { task } = this.props
        return <div className='panel panel-default'>
            <div className='panel-heading'>Task</div>
            <div className='panel-body'>
                <ul>
                    <li>Action: {task.action}</li>
                    <li>Priority: {task.priority}</li>
                    <li>Estimate Hours: {task.estHours}</li>
                    <li>Actual Hours: {task.actHours}</li>
                    <li>Done: {task.done}</li>
                </ul>
                <button className='btn btn-primary btn-sm' onClick={this.completeTask()}>
                    Done
                            </button>
                <button className='btn btn-warning btn-sm' onClick={this.editTask()}>
                    Edit
                            </button>
                <button className='btn btn-danger btn-sm' onClick={this.deleteTask()} > Delete </button >
            </div >
        </div >
    }
}

Task.propTypes = {
    task: PropTypes.object
}