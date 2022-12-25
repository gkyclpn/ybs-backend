const router = require('express').Router()
const { country, customer, order, transport, transportFee, store, product, stock, countryDistance } = require('./service')

//Country
router.post('/logistic/country/create', country.create)
router.get('/logistic/country/list', country.listAll)
router.post('/logistic/country/one', country.one)
router.post('/logistic/country/destroy', country.destroy)

//CountryDistance
router.post('/logistic/country_distance/list', countryDistance.listAll)

//Customer
router.post('/logistic/customer/create', customer.create)
router.post('/logistic/customer/update', customer.update)
router.get('/logistic/customer/list', customer.listAll)
router.post('/logistic/customer/destroy', customer.destroy)

//Order
router.get('/logistic/order/list', order.listAll)

//Transport
router.post('/logistic/transport/create', transport.create)
router.post('/logistic/transport/update', transport.update)
router.get('/logistic/transport/list', transport.listAll)
router.post('/logistic/transport/destroy', transport.destroy)

//TransportFee
router.post('/logistic/transport_fee/create', transportFee.create)
router.post('/logistic/transport_fee/update', transportFee.update)
router.post('/logistic/transport_fee/list', transportFee.listAll)
router.post('/logistic/transport_fee/destroy', transportFee.destroy)

//Store
router.post('/logistic/store/create', store.create)
router.post('/logistic/store/update', store.update)
router.get('/logistic/store/list', store.listAll)
router.post('/logistic/store/destroy', store.destroy)

//Product
router.post('/logistic/product/create', product.create)
router.post('/logistic/product/update', product.update)
router.get('/logistic/product/list', product.listAll)
router.post('/logistic/product/destroy', product.destroy)

//Stock
router.post('/logistic/stock/create', stock.create)
router.post('/logistic/stock/update', stock.update)
router.post('/logistic/stock/one' , stock.one)
router.get('/logistic/stock/list', stock.listAll)
router.post('/logistic/stock/destroy', stock.destroy)

module.exports = router
