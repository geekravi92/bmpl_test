const mongoose = require('mongoose');
const connectionString = "mongodb://admin:admin@ds121575.mlab.com:21575/institution_test";
//const database = mongoose.createConnection(connectionString);

const db = mongoose.connect(connectionString);

module.exports = db.connection;