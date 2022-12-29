const products = require("../db/products.json")

const productInformation = (req, res, next) => {
    const id = req.params.id
    const product = products.filter(x => x.id == id)
    res.send(product)
    
}




module.exports = {
    productInformation
}