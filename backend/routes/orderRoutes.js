const express = require('express')
const router = express.Router();

const{
    AddOrderItems
} = require('../controller/orderController')

router.route('/order').post(AddOrderItems)
module.exports = router;