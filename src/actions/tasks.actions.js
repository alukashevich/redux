import {
    TASKS_REQUEST,
    GET_TASKS_SUCCES
} from '../constants/tasks.constants'
import axios from 'axios'

export function getTasks() {

    var tasksUrl = 'http://localhost:3000/tasks';

    return function (dispatch) {

        dispatch({
            type: TASKS_REQUEST
        })

        axios.get(tasksUrl)
            .then(res => {
                //const tasks = res.map(obj => obj);
                dispatch({
                    type: GET_TASKS_SUCCES,
                    payload: res.data
                })
            });

    }

}