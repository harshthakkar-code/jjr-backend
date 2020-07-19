var mysql=require('mysql');
var con=mysql.createPool({
    host:'localhost',user:'root',password:'',database:'JJRSorftware'
});

module.exports=con;