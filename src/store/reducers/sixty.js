import { handleActions } from 'redux-actions'
import { ADD, MINUS, ASYNC_ADD } from '../types/sixty'

export default handleActions({
  [ADD] (state) {
    return {
      ...state,
      second: state.second + 1
    }
  },
  [MINUS] (state) {
    return {
      ...state,
      second: state.second - 1
    }
  },
  [ASYNC_ADD] (state, action) {
    return {
      ...state,
      second: state.second + action.payload
    }
  }
}, {
  second: 60
})