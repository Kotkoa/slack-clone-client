import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import infobase from './infobase'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    infobase
  })

export default createRootReducer
