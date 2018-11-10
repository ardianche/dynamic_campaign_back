const express =require('express');
const basicClass = require('../queries/basic');
const campaignAct = require('../queries/campaignSpecific');
const campaign = new campaignAct();
const router = express.Router();
const basicQueries = new basicClass();
const db_conf = require('../config/db');


router.post('/add',(req,res)=>{
    console.log('A po hin qetu: ',req.body);
    campaign.addCampaign(req.body).then(result=>{
        campaign.getCampaigns().then(rez=>{
            res.send(JSON.stringify(rez));
        });
    });
});

router.post('/edit',(req,res)=>{
    campaign.editCampaign(req.body).then(result=>{
        console.log('RESULT : ',result);
        res.send(JSON.stringify(result));
    })
});

router.post('/remove',(req,res)=>{
    console.log('REQ: ',req.body);
    campaign.deleteCampaign(req.body).then(result=>{
        res.send(JSON.stringify(result));
    })
});

router.get('/',(req,res)=>{
    campaign.getCampaigns().then(rez=> res.send(JSON.stringify(rez)));
});
                
module.exports = router;



















