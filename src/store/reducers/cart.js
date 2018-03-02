import { handleActions } from 'redux-actions'
import { ADD, SUBTRACT, CHECKOUT, CLEANUP } from '../types/cart'


export default handleActions({
  [ADD] (state, action) {
    const id = action.payload[0]
    // 理论上不应该这么操作，直接改变state
    state[id] ? state[id] += 1 : state[id] = 1
    return state
  },
  [SUBTRACT] (state, action) {
    const id = action.payload[0]
    state[id] === 1 ?  delete state[id] : state[id] -= 1
    return state
  },
  [CHECKOUT] (state) {
    return state
  },
  [CLEANUP] (state) {
    return {}
  }
}, {})