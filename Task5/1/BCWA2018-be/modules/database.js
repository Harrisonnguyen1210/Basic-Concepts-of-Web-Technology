'use strict';
const mysql = require('mysql2');

const connect = () => {
    // create the connection to database
    return mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        database: process.env.DB_NAME,
        password: process.env.DB_PASS,
    });
};

const select = (res, connection, callback) => {
    // simple query
    connection.query(
        'SELECT * FROM bc_media',
        (err, results, fields) => {
            res.json(results);
            callback();
        },
    );
};

const insert = (data, connection, callback) => {
    // simple query
    connection.execute(
        'INSERT INTO bc_media (category, title, details, thumbnail, image, original, coordinates) VALUE (?, ?, ?, ?, ?, ?, ?);',
        data,
        (err, results, fields) => {
            callback();
        },
    );
};

module.exports = {
    connect: connect,
    select: select,
    insert: insert,
};