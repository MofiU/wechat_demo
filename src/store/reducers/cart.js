import { handleActions } from 'redux-actions'
import { ADD, SUBTRACT, CHECKOUT } from '../types/cart'


const cartData = [
  { food: {id: 1, price: 50, title: '红烧猪手'}, quantity: 2 },
  { food: {id: 2, price: 78, title: '香煎龙虾'}, quantity: 4 },
  { food: {id: 3, price: 65, title: '芝麻羊肉'}, quantity: 2 }
]

export default handleActions({
  [ADD] (state, action) {
    const id = action.payload[0]
    state.data.find((item) => { return item.food.id === id  }).quantity += 1
    return state
  },
  [SUBTRACT] (state, action) {
    const id = action.payload[0]
    state.data.find((item) => { return item.food.id === id  }).quantity -= 1
    return state
  },
  [CHECKOUT] (state) {
    return state
  }
}, {
  data: cartData
})