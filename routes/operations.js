const express =require('express');
const basicClass = require('../queries/basic');
const router = express.Router();
const basicQueries = new basicClass();
const db_conf = require('../config/db');
const operationsClass = require('../queries/operations');
const operations = new operationsClass();


router.get('/',(req,res)=>{
    let results = operations.getOperations();
    res.send(JSON.stringify(results));
});

router.post('/add',(req,res)=>{
    operations.insertOperation(req.body);
});

router.post('/delete',(req,res)=>{
    operations.deleteOperation(req.body);
});