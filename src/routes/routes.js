const express = require('express')
const router=express.Router()
const controllerLogin = require('../controller/loginControl')
const controllerAddproduct = require('../controller/addproduct')
const controllerProduct = require('../controller/productInformation')
const { body } = require('express-validator');

router.get('/', (req, res) => {
    res.render('../views/index')
})

router.get('/cart', (req, res) => {
    res.render('../views/cart')
})

router.get('/addproduct', (req, res) => {res.render('../views/addproduct')})
router.post('/addproduct', controllerAddproduct.addProduct)


router.get('/detail-products/:id', controllerProduct.productInformation)

router.get('/login', controllerLogin.vistaLogin)
router.post('/login', body('email').isEmail(), controllerLogin.postLogin)


router.get('/register', (req, res) => {
    res.render('../views/register')
})


module.exports = router



