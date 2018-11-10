const db_conf = require('../config/db');
const errorHandling = require('../queries/errors');
const error = new errorHandling();

/*
#######################################################
    AUTHOR  :   ARDIAN IBRAHIMI
    DATE    :   15th October, 2018
    VERSION :   1.0
    NOTES   :   This class offers methods for running 
                queries to the databse regarding Conditions. 
#######################################################
*/

class ConditionDefinition {
    async selectConditions(campaign_id){
      return new Promise((resolve,reject)=>{
        console.log('CA: ',campaign_id);
        let query = `SELECT * FROM pwg_conditions WHERE campaign_ref = ${campaign_id}`;
        db_conf.query(query,(err,res)=>{
            if(err){
               error.insertError('GETTING CONDITIONS',err.message,
                                    'conditionDefinition.selectConditions',
                                        new Date(),`
                                            CAMPAIGN_ID:${campaign_id}`);
               return;
            }
            resolve(res);
        });
      });
    }

    async removeConditions(condition_id){
        let query = `DELETE FROM pwg_conditions WHERE id = ${condition_id}`;
        db_conf.query(query,(err,res)=>{
            if(err){
                error.insertError('REMOVING CONDITIONS',err.message,
                                    'conditionDefinition.removeConditions',
                                        new Date(), `CONDITION ID: ${condition_id}`);
                return;
            }
        });
    }

    async insertConditions(payload){
        console.log('PAYLOAD : ', payload);
        let query = `INSERT INTO pwg_conditions(name,type,default_value,visibility,campaign_ref,effective_date)
                        VALUES('${payload.name}','${payload.type}','${payload.default_value}','${payload.visibility}'
                        ,${payload.campaign_ref},'${payload.effective_date}');`;
        db_conf.query(query,(err,res)=>{
            if(err){
                console.log('PAYLOAD: ', payload.campaign_ref);
                error.insertError('INSERTING CONDITIONS',err.message,
                                    'conditionDefinition.insertCondition',
                                        new Date(),
                                            `CAMPAIGN_ID:${payload.campaign_ref}`);
                return;
            }
            return res;
        });
    }
}

module.exports = ConditionDefinition;