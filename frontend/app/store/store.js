"use client"
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './RootReducer';
import globalSaga from './globalSagas'
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();


export const store = configureStore({
  
  reducer: rootReducer,
   middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
        thunk: false,
        serializableCheck: false
    }),
    sagaMiddleware
]

})

sagaMiddleware.run(globalSaga)

export default store