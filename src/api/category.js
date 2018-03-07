import { host, header } from './config'
import wepy from 'wepy'

export async function getCategories () {
  let result =  await wepy.request({
    url: host + 'get_merchants_categories',
    method: 'POST',
    header: header
  }).then((res) => {
    return res.data.result
  })
  return result
}