import { handleActions } from 'redux-actions'
import { LOAD_ORDER } from '../types/order'

export default handleActions({
  [LOAD_ORDER] (state, action) {
    return action.payload
  }
}, {
  data: null,
  count: 0
})
