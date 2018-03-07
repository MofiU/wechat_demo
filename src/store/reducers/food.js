import { handleActions } from 'redux-actions'
import { LOAD_PRODUCT, LOAD_PRODUCT_LIST } from '../types/food'

export default handleActions({
  [LOAD_PRODUCT] (state, action) {
    return {
      ...state,
      data: action.payload
    }
  },
  [LOAD_PRODUCT_LIST] (state, action) {
    return {
      ...state,
      list: action.payload
    }
  }
}, {
  data: [],
  list: []
})
