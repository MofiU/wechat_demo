import { handleActions } from 'redux-actions'
import { UPDATE_REMARK } from '../types/remark'

export default handleActions({
  [UPDATE_REMARK] (state, action) {
    const value = action.payload.detail.value.remark
    return {data: value}
  }
}, {
  data: null
})
