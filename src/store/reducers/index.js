import { combineReducers } from 'redux'
import counter from './counter'
import category from './category'
import seller from './seller'
import cart from './cart'
import food from './food'
import remark from './remark'
import order from './order'
import ledger from './ledger'

export default combineReducers({
  counter,
  category,
  seller,
  cart,
  food,
  remark,
  order,
  ledger
})