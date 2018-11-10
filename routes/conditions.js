const express =require('express');
const basicClass = require('../queries/basic');
const campaignAct = require('../queries/campaignSpecific');
const campaign = new campaignAct();
const router = express.Router();
const basicQueries = new basicClass();
const db_conf = require('../config/db');
const conditionClass = require('../queries/conditions');
const condition = new conditionClass();

router.post('/add',(req,res)=>{
    condition.insertConditions(req.body).then(rezultati => {
        res.send(JSON.stringify(rezultati));
    });
});

router.post('/remove',(req,res)=>{
    condition.removeConditions(req.body);
});

router.get('/',(req,res)=>{
    console.log('CONDITION : ',req.query.id);
    condition.selectConditions(req.query.id).then(rezultati =>{
        res.send(JSON.stringify(rezultati));
    });
});

module.exports = router;