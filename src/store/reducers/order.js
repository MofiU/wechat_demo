import { handleActions } from 'redux-actions'
import { LOAD_ORDER } from '../types/order'

export default handleActions({
  [LOAD_ORDER] (state, action) {
    action.payload.data.reverse().forEach(function(item) {
      item.orderedAt.$date = new Date(item.orderedAt.$date).toLocaleTimeString('en-US')
    })
    return action.payload
  }
}, {
  data: null,
  count: 0
})
