import {takeLatest} from 'redux-saga/effects';
import { getProduct } from '../slices/productSlice';
import { getTodos } from '../slices/todoSlice';
import { handleGetProduct } from './handlers/product';
import { handleGetTodo } from './handlers/todo';

export function* watcherSaga(){
    yield takeLatest(getTodos.type, handleGetTodo);
    yield takeLatest(getProduct.type, handleGetProduct);
}