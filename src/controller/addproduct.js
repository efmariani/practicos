const { Sequelize } = require('sequelize');


const addProduct = ((req, res, next) => {
    const titulo = req.body['title']
    console.log(titulo)
    const sequelize = new Sequelize('littleglint', 'root', 'efmariani', {
        host: 'localhost',
        dialect: 'mysql'
      });
    
    try {
            sequelize.authenticate();
            console.log('Connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    
})  

module.exports = {
    addProduct
}