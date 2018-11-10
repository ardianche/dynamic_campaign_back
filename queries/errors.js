const db_conf = require('../config/db');

/*#######################################################
    AUTHOR  :   ARDIAN IBRAHIMI
    DATE    :   15th October, 2018
    VERSION :   1.0
    NOTES   :   This class offers a method for inserting errors
                into pwg_error_log after a query wasn't executed right. 
  #######################################################*/


class ErrorHandling{
    async insertError(title,message,function_name,created_date,parameters){
        let insert_error = `INSERT INTO pwg_error_logs (title,message,function,created_date,parameters) 
            VALUES(${title},${message},${function_name},${created_date},${parameters});`;
        db_conf.query(insert_error,(err,res)=>{
            if(err) return null;
            return res;
        });
    }
}

module.exports = ErrorHandling;