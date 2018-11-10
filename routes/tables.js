const express =require('express');
const basicClass = require('../queries/basic');
const router = express.Router();
const basicQueries = new basicClass();
const db_conf = require('../config/db');
const Tables = require('../queries/tables');
const tables = new Tables();


router.get('/info',(req,res)=>{
    let results = tables.getAllTables();
    console.log('RESULTS: ',results);
    res.send(JSON.stringify(results));
});

module.exports = router;