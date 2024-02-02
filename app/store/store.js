"use client"
import { configureStore } from '@reduxjs/toolkit'
import RootReducer from './RootReducer'
import globalSaga from './globalSagas'
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();


export const store = configureStore({
  
  reducer: RootReducer,
   middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
        thunk: false
    }),
    sagaMiddleware
]

})

sagaMiddleware.run(globalSaga)

export default store