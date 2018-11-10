const db_conf = require('../config/db');
const errorHandling = require('../queries/errors');
const error = new errorHandling();

/*#######################################################
    AUTHOR  :   ARDIAN IBRAHIMI
    DATE    :   15th October, 2018
    VERSION :   1.0
    NOTES   :   This class offers methods for running 
                queries to the databse regarding operations. 
  #######################################################*/



class Operations{
    async getOperations(){
        return new Promise((resolve,reject)=>{
            let query = 'SELECT * FROM pwg_operations';
            db_conf.query(query,(err,res)=>{
                if(err){
                    error.insertError('GETTING OPERATIONS',err.message,'Operations.getOperations',
                                        new Date(),'N/A');
                }else{
                    resolve(res);
                }
            });
        });
    }
    async insertOperation(payload){
        let query = `INSERT INTO pwg_operations(name,campaign_refs,parameters,scripts)
                        VALUES('${payload.name}','${payload.campaign_refs}'
                            ,'${payload.parameters}','${payload.scripts}')`;

        db_conf.query(query,(err,res)=>{
            if(err){
                error.insertError('INSERTING OPERATION',err.message,'Operations.insertOperation'
                                    ,new Date(),`'${payload}'`);
                return;
            }
        });
    }
    async deleteOperation(operation_id){
        let query = `DELETE FROM pwg_operations WHERE id = ${operation_id}`;
        db_conf.query(query,(err,res)=>{
            if(err){
                error.insertError('DELETING OPERATION',err.message,'Operations.deleteOperation'
                                    ,new Date(),`OPERATION ID: ${operation_id}`);
            } 
        });
    }
}

module.exports = Operations;