import { host, header } from './config'
import wepy from 'wepy'

export async function getProducts () {
  let result =  await wepy.request({
    url: host + 'merchants/products',
    method: 'POST',
    header: header
  }).then((res) => {
    return res.data.result
  })
  return result
}

export async function getProductByCategory (categoryId) {
  let result =  await wepy.request({
    url: host + 'merchants/categories/products',
    method: 'POST',
    header: header,
    data: {
      'categories': [{'_id': categoryId}]
    }
  }).then((res) => {
    return res.data.result
  })
  return result
}