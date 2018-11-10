const db_conf = require('../config/db');
const errorHandling = require('../queries/errors');
const errors = new errorHandling();

/*#######################################################
    AUTHOR  :   ARDIAN IBRAHIMI
    DATE    :   15th October, 2018
    VERSION :   1.0
    NOTES   :   This class offers methods for running 
                queries to the databse regarding campaigns. 
  #######################################################*/

class CampaignActivity{

    async addCampaign(payload){ 
        return new Promise((resolve,reject)=>{let current_condition = null;
        let query = `INSERT INTO pwg_campaign (title,description,start_date,end_date)
                        VALUES('${payload.title}','${payload.description}','${payload.start_date}',
                                '${payload.end_date}');`;
        db_conf.query(query,(err,res)=>{
            if(err){
                errors.insertError('ADDING CAMPAIGN',err.message,'CampaignActivity.addCampaign',
                new Date().toJSON().slice(0, 10),JSON.stringify(payload));
                return;
            }
             resolve(res);
            })
        });
    };

    async getCampaigns(){
        return new Promise((resolve,reject)=>{
            let campaigns_result = null;
            let query = `SELECT * FROM pwg_campaign`;
            db_conf.query(query,(err,res)=>{
                resolve(res);
            });
        });
    }

    async editCampaign(campaign_id){

    };

    async deleteCampaign(campaign_id){
        let query = `DELETE FROM pwg_campaign where id = ${campaign_id.id};`;

        db_conf.query(query, (err,res)=>{
            if(err){
                errors.insertError('DELETING CAMPAIGN',err.message,'CampaignActivity.deleteCampaign',
                                        new Date(),JSON.stringify(campaign_id));
                return;
            }
            return 'Successfuly Deleted';
        });
    };
}

module.exports = CampaignActivity;