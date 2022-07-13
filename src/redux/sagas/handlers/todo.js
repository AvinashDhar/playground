import {call, put} from 'redux-saga/effects';
import { setTodos } from '../../slices/todoSlice';
import { requestGetTodo } from '../requesters/todo';

export function* handleGetTodo(action){
    try {
        const response = yield call(requestGetTodo);
        const {data} = response;
        yield put(setTodos({todos:data}));   
    } catch (error) {
        console.log("error while setting todos data after api call", error);
    }
} 