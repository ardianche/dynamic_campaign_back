const db_conf = require('../config/db');

/*#######################################################
    AUTHOR  :   ARDIAN IBRAHIMI
    DATE    :   15th October, 2018
    VERSION :   1.0
    NOTES   :   This class offers a method for clearing a
                specific table. 
  #######################################################*/

class Basics {
    async clearTable(tableName){
        let clear_stmt = `DELETE FROM ${tableName}`
        db_conf.query(clear_stmt,(err,result)=>{
            if(err){
                console.log('Ka mbete ne error');
                return;
            }
        });
    }
}

module.exports = Basics;