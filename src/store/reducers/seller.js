import { handleActions } from 'redux-actions'
import { REFRESH } from '../types/seller'

export default handleActions({
  [REFRESH] (state) {
    return state
  }
}, {
  data: {
    name: '金牌乳亮仔',
    notice: '白刀子进红刀子出',
    business_start: '全天',
    business_end: '全天',
    logo: {
      url: 'muyou'
    }
  }
})