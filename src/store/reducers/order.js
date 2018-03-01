import { handleActions } from 'redux-actions'
import { LOAD } from '../types/order'

export default handleActions({
  [LOAD] (state, action) {
    return {
      data: [
        ...state.data,
        { id: Math.random(), address: '澳门勒思系统有限公司', title: '红烧猪手', amount: 10000, quantity: 12, status: 1, avatar: 'http://img2.imgtn.bdimg.com/it/u=4243338074,3897581890&fm=27&gp=0.jpg' },
      ],
      count: 100
    }
  }
}, {
  data: [
    { id: 1, address: '澳门勒思系统有限公司', title: '红烧猪手', amount: 10000, quantity: 12, status: 1, avatar: 'http://img2.imgtn.bdimg.com/it/u=4243338074,3897581890&fm=27&gp=0.jpg' },
    { id: 2, address: '澳门勒思系统有限公司', title: '香辣虾', amount: 1000, quantity: 2, status: 0, avatar: 'http://img2.imgtn.bdimg.com/it/u=4243338074,3897581890&fm=27&gp=0.jpg' }
  ],
  count: 100
})
