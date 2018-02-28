import { handleActions } from 'redux-actions'
import { FETCH } from '../types/food'

export default handleActions({
  [FETCH] (state, action) {
    const categoryId = action.payload[0]
    return state
  }
}, {
  data: [
    { id: 1, title: '香煎龙虾', summary: '回味无穷', price: 50, thumb_url: 'http://img2.imgtn.bdimg.com/it/u=4243338074,3897581890&fm=27&gp=0.jpg' },
    { id: 2, title: '酥饼牛柳', summary: '镇店名菜', price: 78, thumb_url: 'http://img2.imgtn.bdimg.com/it/u=4243338074,3897581890&fm=27&gp=0.jpg' },
    { id: 3, title: '芝麻羊肉', summary: '经典菜式', price: 65, thumb_url: 'http://img2.imgtn.bdimg.com/it/u=4243338074,3897581890&fm=27&gp=0.jpg' },
    { id: 4, title: '黄金鸭舌', summary: '啧啧啧', price: 38, thumb_url: 'http://img2.imgtn.bdimg.com/it/u=4243338074,3897581890&fm=27&gp=0.jpg' },
    { id: 5, title: '红烧猪手', summary: '金黄细腻', price: 42, thumb_url: 'http://img2.imgtn.bdimg.com/it/u=4243338074,3897581890&fm=27&gp=0.jpg' }
  ]
})
