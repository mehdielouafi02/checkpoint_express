const express =require('express')
const app = express()
const pug = require('pug');


app.set("view engine" , pug)
app.set('view' , './views')

app.use(date=(req,res,next)=>{
    let requestAtTime=new Date()
    let day =requestAtTime.getDay()
    let hour=requestAtTime.getHours()
    console.log(requestAtTime)
    if (day>=1 && day<= 5 && hour>=9 && hour<=17)
    {next()}
    else{
        next('site web fermer ')
    }
})
app.get('/home',(req,res)=>{
    res.render("index.pug",{name:"Mehdi"})
})

app.get('/services' ,(req,res)=>{
    res.render('services.pug')
})

app.get('/contact' , (req,res)=>{
    res.render('contact.pug', {email:"zeusposei@gmail.com", number:"929292"})
})


app.listen(5000 , (err)=>{
   err 
   ? console.log("server error!")
   : console.log("server is running on port 5000")
})
