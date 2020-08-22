require('./db/db.js')
const config=require('./config/config.js')
const express=require('express');
const employeeController=require('./controllers/employeeController');


var app=express()


app.listen(config.port,()=>{
    console.log("Express server is started at port : "+config.port);
})
app.use('/',employeeController);