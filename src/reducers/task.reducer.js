import {
    GET_TASKS_SUCCES
} from '../constants/tasks.constants'

const initialState = {
    tasks: []
}

export default function task(state = initialState, action) {
    switch (action.type) {

        case GET_TASKS_SUCCES:
            return { ...state, tasks: action.payload, fetching: false }

        default:
            return state;
    }
}