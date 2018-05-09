import { host, header } from './config'
import wepy from 'wepy'

export async function getLedger () {
  let result =  await wepy.request({
    url: host + 'merchants/customers/loyalty-program/essentials',
    method: 'POST',
    header: header,
    data: {
      "loyaltyProgram" : {
        "_id": "loyalty_program/3840cda1-835b-496a-be1d-d6340ac7ee46"
      },
      "customer": {
        "_id": "customer/e6fa0191-a3b3-473e-8f09-65207f061c14"
      }
    }
  }).then((res) => {
    return res.data
  })
  return result
}