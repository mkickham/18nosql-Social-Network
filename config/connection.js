// this imports the mongoose database
const mongoose = require('mongoose');

mongoose.connection(process.env)

// this exports the connection to the database
module.exports = mongoose.connection