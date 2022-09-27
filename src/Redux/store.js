import { combineReducers } from 'redux'
import { reducers } from './reducer'
import {configureStore} from '@reduxjs/toolkit'


const reducer = combineReducers({
reducers
})

export const store = configureStore({
        reducer
})