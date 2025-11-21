const express = require('express')
const router = express.Router();

const{
    RegisterUser
} = require('../controller/userController')

router.route('/user').post(RegisterUser)
module.exports = router;