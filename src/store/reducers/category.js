import { handleActions } from 'redux-actions'
import { CHANGE_CATEGORY } from '../types/category'


const initCategoryData = [
  {
    id: 1,
    title: '牛肉'
  }, {
    id: 2,
    title: '猪肉'
  }, {
    id: 3,
    title: '亮仔肉'
  }
]

const loadData = (data) => {
  data[0].index = true
  return data
}

const changeCategory = (data, id) => {
  data.forEach((v) => { delete v.index })
  data.find((category) => {
    return category.id === id
  }).index = true
  return data
}

export default handleActions({
  [CHANGE_CATEGORY] (state, action) {
    const categoryId = action.payload[0]
    return {
      data: changeCategory(initCategoryData, categoryId)
    }
  }
}, {
  data: loadData(initCategoryData)
})