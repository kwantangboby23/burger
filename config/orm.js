
var connection = require("../config/connection.js");

var orm = {

    selectAll: function (tableName, cb) {
        var queryString = "SELECT * FROM ?? ";
        connection.query(queryString, [tableName], function (err, result) {
            if (err) throw err;
            cb(result)
        });
    },

    insertOne: function (tableName, col, val, cb) {
        var queryString = "INSERT INTO " + tableName;

        queryString += " (" + col + ") ";
        queryString += "VALUES (" + val + ") ";


        console.log(queryString);

        connection.query(queryString, function (err, result) {
            if (err) {          
                throw err;
            }

            cb(result);
        });
    },

    updateOne: function (tableName, col, val, cond, cb) {
        var queryString = "UPDATE " + tableName;

        queryString += "SET " + col + "=" + val;
        queryString += "WHERE " + cond;

        connection.query(queryString, function (err, result){
            if (err) {
                throw err;
              }
        
              cb(result);
        });
    }

};



module.exports = orm;