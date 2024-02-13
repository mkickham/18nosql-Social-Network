// this imports the mongoose database
const { connect, connection } = require('mongoose');

connect('mongodb://127.0.0.1:27017/socialmedia');

// this exports the connection to the database
module.exports = connection;