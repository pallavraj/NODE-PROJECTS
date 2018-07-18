const bcrypt = require('bcrypt');
const database = require('./database');

const saltRound =10;

function encrypt(username , password ,cb) {
    bcrypt.genSalt(saltRound,function (err,salt) {
        bcrypt.hash(password , salt ,function (err , hash) {
            database.signUp(username ,hash ,function (data) {
                cb(data);
            })
        })
    })
}

function compare(password ,hash ,cb) {
    bcrypt.compare(password , hash ,function (err,result) {
        cb(result);
    })
}


module.exports = {
    encrypt,
    compare
}