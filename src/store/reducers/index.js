import { combineReducers } from 'redux'
import counter from './counter'
import sixty from './sixty'
import category from './category'
import seller from './seller'

export default combineReducers({
  counter,
  sixty,
  category,
  seller
})