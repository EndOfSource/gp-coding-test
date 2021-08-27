var mysql = require('mysql');

var pool  = mysql.createPool({
    host     : 'localhost',
    user     : 'm-user',
    password : 'user-secret',
    database : 'greyparrot'
});

var getConnection = function(callback) {
    pool.getConnection(function(err, connection) {
        callback(err, connection);
    });
};

module.exports = getConnection;