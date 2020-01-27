// import dependencies
const mysql = require('mysql');
const { promisify } = require('until'); // Convierte callbacks a promesas esto lo utlizamos debido a que mysql no acepta promesas 
const { database } = require('./keys');

const pool = mysql.createPool(database); // coneccion a la db
// createPool() = tiene una especie de hilos que se van ejecutando y cada uno lo hace una a la vez

pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('DATABASE CONNECTION WAS CLOSED');
        }
        if (err.code === 'ERR_CON_COUNT_ERROR') {
            console.error('DATABASE HAS TO MANY CONNECTIONS');
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('DATABASE CONNECTION WAS REFUSED');
        }
    }

    if (connection) {
        connection.release();
        console.log('DB is Connected');
        return;
    }
});

// Promisify pool querys
pool.query = promisify(pool.query)

module.exports = pool;