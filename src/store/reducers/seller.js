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
    express_fee: 5,
    min_amount: 30,
    logo: {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlmJuRY1IpPWLs9N-d18aCvZlfuD6JlEkkbKEy2CjEAECUvDSPkw'
    }
  }
})
