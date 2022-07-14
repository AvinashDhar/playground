import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import userReducer from './slices/userSlice';
import productReducer from './slices/productSlice';
import todoReducer from './slices/todoSlice';
import { watcherSaga } from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        user: userReducer,
        product: productReducer,
        todo: todoReducer
    },
    middleware:[...getDefaultMiddleware({thunk:false}),sagaMiddleware]
});

sagaMiddleware.run(watcherSaga);