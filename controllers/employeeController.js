const express=require('express')
var router=express.Router()
var client=require('../db/db.js')


router.get('/',(req,res)=>{
    res.render("employee/addOrEdit",{
        viewTitle:'Add Employee'
    });
})

router.post('/',(req,res)=>{
    addEmployee(req,res);

})

router.get('/list',(req,res)=>{
    res.render("employee/addOrEdit",{
        viewTitle:'Add Employee'
    });
})

function addEmployee(req,res)
{
    var email=req.body.email
    var city=req.body.city
    var name=req.body.name
    var mobile=req.body.mobile

    queryInsertDb="INSERT INTO employees (email, firstname,mobile,city)VALUES ('"+email+"','"+name+"','"+mobile+"','"+city+"');";
    client.query(queryInsertDb).catch(err => {
        console.error(err);
    }).finally(() => {
        res.redirect("/");
      
    });;
}

module.exports=router;