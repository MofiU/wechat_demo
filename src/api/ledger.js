import { host, header } from './config'
import wepy from 'wepy'

export async function getLedger () {
  let result =  await wepy.request({
    url: host + 'merchants/customers/loyalty-program/essentials',
    method: 'POST',
    header: header,
    data: {
      "customer" : {"_id": "customer/d1998552-9bf8-4b64-b85c-d8a792f469f4"}
    }
  }).then((res) => {
    return res.data
  })
  return result
}