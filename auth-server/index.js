require('./models/User');

const express=require('express')
const app=express()
const PORT=80
const bodyParser=require('body-parser')
const {mogoUrl}=require('./keys')
const mongoose=require('mongoose')
const requireToken=require('./middleware/requireToken')
const authRoutes = require('./routes/authRoutes')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(authRoutes)
mongoose.connect(mogoUrl,{
    useNewUrlParser: true,
    useUnifiedTopology: true

})

mongoose.connection.on('connected',()=>{
    console.log("connected to mongo ")
})
mongoose.connection.on('error', (err) => {
    console.log("this is an error",err)
})

app.get('/',requireToken,(req,res)=>{
    res.send("your email is "+req.user.email)
})


app.listen(PORT,()=>{
    console.log("server running"+PORT)
})
