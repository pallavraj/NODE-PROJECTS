const mysql =require('mysql');

var connection=mysql.createConnection({
    host: "localhost",
    user: "pallav",
    password: 'pallav',
    database: 'user_data'
})

function connectDb() {
    connection.connect();
}

function signUp(username , hash ,cb) {
    connection.query(`insert into user_config(username,password) values (?,?)`, [username,hash],function (err, results) {
        if(err) throw err;
        cb(results);
    })
}

function getUser(username , cb) {
    connection.query(`select * from user_config where username=?`, [username],function (err, results) {
       if(err) throw err;
       cb(results);

    })
}


module.exports = {
    connectDb,
    signUp,
    getUser,
}