const express = require('express')
const path = require('path')
const bodyparser = require('body-parser')
const session = require('express-session')
const {v4:uuidv4} = require('uuid')
const router = require('./router')


const app = express()
 
const port = process.env.port || 8000
  

app.set('view engine','ejs')
 
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))


///////// loadin static files
app.use('/static',express.static(path.join(__dirname,'public')))
app.use('/assets',express.static(path.join(__dirname,'public/assets')))

app.use(session({
    secret:uuidv4(),
    resave:false,
    saveUnintialized:true
}))

app.use('/route',router)





//////// home route
app.get('/',(req,res)=>{
   res.render('base',{titl:"Login System"})
})

app.listen(port,(req,res)=>{
    console.log("listening to the server on http://localhost:800")
})