const express=require('express')
var router=express.Router()
var client=require('../db/db.js')


router.get('/',(req,res)=>{
    res.redirect('/add')
})

router.get('/add',(req,res)=>{
    res.render("employee/addOrEdit",{
        viewTitle:'Add Employee'
    });
})    
router.post('/add',(req,res)=>{
    addEmployee(req,res);

})

router.get('/list',(req,res)=>{
    const sql = "SELECT * FROM employees"
    client.query(sql, [], (err, result) => {
      if (err) {
        return console.error(err.message);
      }
      res.render("employee/list", { model: result.rows,viewTitle:'Employees List' });
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
        res.redirect("/list");
      
    });;
}

module.exports=router;