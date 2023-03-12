const sql = require("mysql")

//---------------------DataBase Connection
const DB = sql.createConnection({
    host:"localhost",
    user: "root",
    password: '123456789',
    database:'BookDirectory'
  
  });
  
 DB.connect(function(err) {
    if (err) throw err;
    console.log("Database Connected!");
  });
    //--------------------create Dtabases-----------------//

    // DB.query("CREATE DATABASE BookDirectory", function (err, result) {
    //   if (err) throw err;
    //   console.log("Database created");
    // });
 
 


 

  module.exports = DB
  
  

 