import { combineReducers } from 'redux'
import counter from './counter'
import sixty from './sixty'

export default combineReducers({
  counter,
  sixty
})