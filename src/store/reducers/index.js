import { combineReducers } from 'redux'
import counter from './counter'
import sixty from './sixty'
import category from './category'
import seller from './seller'
import cart from './cart'

export default combineReducers({
  counter,
  sixty,
  category,
  seller,
  cart
})