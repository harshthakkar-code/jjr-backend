var db = require('../dbconnection');
var inquiry = {
    getAllInquiry:function(callback){
        return db.query('select * from information',callback);
    },
    getInquirybyid: function (id, callback) {
        return db.query('select * from information where id=?', [id], callback);
    },
    deleteInquiry: function (Inquiry_id, callback) {
        return db.query('delete from information where id=?', [Inquiry_id], callback);
    },
    deleteInquiry: function (item, callback) {
        return db.query("delete from information where id in (?)", [item], callback);
    },
    addInquiry: function (item, callback) {

        return db.query('insert into information values(null,?,?,?,?)', [item.name, item.email, item.inquiry, item.description], callback);
    }
}
module.exports=inquiry;