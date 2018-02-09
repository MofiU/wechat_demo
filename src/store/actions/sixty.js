import { ASYNC_ADD } from '../types/sixty'
import { createAction } from 'redux-actions'

export const asyncAdd = createAction(ASYNC_ADD, () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(10)
    }, 2000)
  })
})