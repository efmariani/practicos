const { validationResult, body } = require("express-validator")
const users = require("../db/usuarios.json")
const bcrypt = require("bcrypt")
const saltRounds = 10;
const someOtherPlaintextPassword = 'not_bacon';


const vistaLogin =  (req, res) => {
    res.render('login')
}

const postLogin = ((req, res, next) => {
    const errors = validationResult(req)
    const email = req.body.email
    const pass = req.body.password
    const passhash= bcrypt.hashSync(pass, saltRounds)


    if (!errors.isEmpty()) {
        console.log('email esta vacio')  
        advertencia='Ingrese un mail valido'
        return res.render('login')
    }
    else if (!users.find(x => x.user == email)){
        console.log('Usuario no encontrado')
        return res.render('login')
    }
    else if(bcrypt.compareSync(pass,users.find(x => x.user == email).password)){
        console.log('acceso concedido')
        res.render('index')
    }
    else{
        console.log('contraseña invalida')
        res.render('login')
    }
}
)


module.exports = {
    vistaLogin,
    postLogin
}