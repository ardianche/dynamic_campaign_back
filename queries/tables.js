const db_conf = require('../config/db');
const errorHandling = require('../queries/errors');
const error = new errorHandling();

class Tables{
    async getAllTables(){
        let query = 'show tables';
        db_conf.query(query,(err,res)=>{
            if(err){
                return;
            }else{
                console.log('RES: ',res);
                return res;
            }
       })
    }
}

module.exports = Tables;