const express = require('express')
const router = express.Router();

const{
    createProduct,
    getProduct,
    deleteProduct
} = require('../controller/productController')

router.route('/products').get(getProduct).post(createProduct)
router.route('/products/:id').delete(deleteProduct);
module.exports = router;