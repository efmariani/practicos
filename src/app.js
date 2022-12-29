const express = require('express')
const app = express()
const path = require('path')
const port = 3000
const bodyParser = require('body-parser')

//Leer .env
require('dotenv').config()
const { PASSWORD } = process.env


const cookieParser = require("cookie-parser");
const sessions = require('express-session')
const cookieTime = 1000*3600*24
app.use(sessions({
    secret: PASSWORD,
    saveUninitialized:true,
    cookie: { maxAge: cookieTime },
    resave: false
    }));
app.use(cookieParser());


app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname,"views"))
app.use(require('./routes/routes'))
app.use(express.static('public'))



app.listen(port, ()=> console.log('Escuchando puerto ', port)) 