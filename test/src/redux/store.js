import {createStore, compose} from 'redux'
import {combineReducers} from 'redux'
import {applyMiddleware} from 'redux'
import Middleware from 'redux-thunk'
import {tableReducer} from "./table-reducer";


let reducers = combineReducers(
    {
        table: tableReducer,
    }
)

const store = createStore(reducers, applyMiddleware(Middleware))

export default store