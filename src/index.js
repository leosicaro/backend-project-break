const express = require('express')
const dbConnection = require('./config/db')
const app = express()
const path = require('path')
const productRoutes = require('./routes/productRoutes')
const PORT = 3000

const methodOverride = require('method-override')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'));
app.set('view engine','pug')
app.use(express.static(path.join(__dirname, '../public')));
app.use('/',productRoutes)



dbConnection()

app.listen(PORT,()=>{
    console.log(`el servidor esta escuchando en http://localhost:${PORT}/products`)
})



//app.use(express.static('public'))










