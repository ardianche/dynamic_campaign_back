//import basicClass from '../queries/basic';
const express =require('express');
const basicClass = require('../queries/basic');
const router = express.Router();
const basicQueries = new basicClass();
const db_conf = require('../config/db');

router.post('/insert',(req,res)=>{
    let parameters = req.body;
    let query = 
    "INSERT into `players` (first_name, last_name, position, number, user_name) " +
        "VALUES('"+parameters.first_name+"','"+parameters.last_name+"','"+parameters.position+"',"+parameters
            .number+",'"+parameters.user_name+"')";
    db_conf.query(query,(err,result)=>{
        if(err){
            return res.status(500).send(err);
        }else{
            let new_result =  basicQueries.returnAllResults();
            res.setHeader('Content-Type','application/json');
            res.send(JSON.stringify(new_result));
        }

    })
});

router.get('/getcourses',(req,result)=>{
    basicQueries.returnAllResults().then(res=>{
        result.setHeader('Content-Type','application/json');
        result.send(JSON.stringify(res));
    });
});

router.get('/clear',(req,result)=>{
    let tableName = req.query.name;
    basicQueries.clearTable(tableName).then(res=>{
        basicQueries.returnAllResults();
    });
});

module.exports = router;