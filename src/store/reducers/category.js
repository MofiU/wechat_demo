import { handleActions } from 'redux-actions'
import { CHANGE_CATEGORY, LOAD_CATEGORY } from '../types/category'

const loadData = (data) => {
  data[0].index = true
  return data
}

const changeCategory = (data, id) => {
  data.forEach((v) => { delete v.index })
  data.find((category) => {
    return category._id === id
  }).index = true
  return data
}

export default handleActions({
  [CHANGE_CATEGORY] (state, action) {
    const id = action.payload[0]
    return {
      data: changeCategory(state.data, id)
    }
  },
  [LOAD_CATEGORY] (state, action) {
    return { data: loadData(action.payload) }
  }
}, {
  data: null
})