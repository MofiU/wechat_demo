import { handleActions } from 'redux-actions'
import { CHANGE_CATEGORY, LOAD_CATEGORY } from '../types/category'

export default handleActions({
  [CHANGE_CATEGORY] (state, action) {
    return {
      ...state,
      currentCategoryId: action.payload[0]
    }
  },
  [LOAD_CATEGORY] (state, action) {
    return {
      ...state,
      data: action.payload
    }
  }
}, {
  data: null,
  currentCategoryId: null
})