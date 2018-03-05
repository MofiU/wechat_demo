import { handleActions } from 'redux-actions'
import { LOAD_PRODUCT } from '../types/food'

export default handleActions({
  [LOAD_PRODUCT] (state, action) {
    return { data: action.payload}
  }
}, {
  data: []
})
