import { handleActions } from 'redux-actions'
import { UPDATE_REMARK, CLEANUP } from '../types/remark'

export default handleActions({
  [UPDATE_REMARK] (state, action) {
    console.log(action)
    const value = action.payload
    return {data: value}
  },
  [CLEANUP] (state) {
    return {data: null}
  }
}, {
  data: null
})
