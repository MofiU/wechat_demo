import { host, header } from './config'
import wepy from 'wepy'

export async function getOrders () {
  let result =  await wepy.request({
    url: host + 'merchants/customers/sales-orders',
    method: 'POST',
    header: header,
    data: {
      "customer" : {"_id": "customer/d1998552-9bf8-4b64-b85c-d8a792f469f4"}
    }
  }).then((res) => {
    return res.data.salesOrders
  })
  return result
}

export async function createOrder (cartData, amount) {
  const salesOrderLineItems = Object.values(cartData).map((item) => {
    return {
      'product': {
        '_id': item._id
      },
      'quantity': item.quantity,
      'currency': 'MOP',
      'subTotal': (item.quantity * parseFloat(item.pricePerUnit))
    }
  })

  let body = {
      'profile': {'_id': 'profile/60655df5-f6bd-4768-9ce6-da664e0b4481'},
      'salesOrder': {
        'discount': 0.00,
        'totalAmount': amount,
        'currency': 'MOP',
        'store': {
          '_id': 'store/5d1d2e31-c8e8-42cd-ad90-4e93350cc19f'
        },
        'customer': {
          '_id': 'customer/d1998552-9bf8-4b64-b85c-d8a792f469f4'
        },
        'salesOrderLineItems': salesOrderLineItems
      }
    }

  let result =  await wepy.request({
    url: host + 'merchants/sales-orders/new',
    method: 'POST',
    header: header,
    data: body
  }).then((res) => {
    return res.data.result.salesOrderRecords
  })
  return result
}

export async function showOrder (id) {
  let result =  await wepy.request({
    url: host + 'merchants/customers/sales-orders/line-items',
    method: 'POST',
    header: header,
    data: {
      "salesOrder" : {"_id": id}
    }
  }).then((res) => {
    return res.data
  })
  return result
}