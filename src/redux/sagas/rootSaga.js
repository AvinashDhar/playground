import {takeLatest} from 'redux-saga/effects';
import { getPost } from '../slices/postSlice';
import { getTodos } from '../slices/todoSlice';
import { handleGetPost } from './handlers/post';
import { handleGetTodo } from './handlers/todo';

export function* watcherSaga(){
    yield takeLatest(getTodos.type, handleGetTodo);
    yield takeLatest(getPost.type, handleGetPost);
}