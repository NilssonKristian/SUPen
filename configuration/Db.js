// module.exports = {
//     MongoURI: 'mongodb+srv://Admin:omD6ulbsbaAzfzM6@SUPenDb-hrqir.mongodb.net/test?retryWrites=true&w=majority'
// }

// module.exports = db;

// const mongoose = require('mongoose')

// mongoose.connect('mongodb://localhost/testing');

// mongoose.connection.once('open', function () {
//     console.log('MongoDb connection succesful.');
// }).on('error', function (error) {
//     console.log('Connection error:', error);
// });

// const db = mongoose.connection

// module.exports = db

//ConnectionString MongoDb Atlas: mongodb+srv://Admin:omD6ulbsbaAzfzM6@SUPenDb-hrqir.mongodb.net/test?retryWrites=true&w=majority

const mongoose = require('mongoose');

mongoose.connect('mongodb://Admin:omD6ulbsbaAzfzM6@cluster0-shard-00-00-iios2.mongodb.net:27017,cluster0-shard-00-01-iios2.mongodb.net:27017,cluster0-shard-00-02-iios2.mongodb.net:27017/test?replicaSet=Cluster0-shard-0&ssl=true&authSource=admin',
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connection: Succeded"))
    .catch(err => console.log("MongoDB connection: Failed. " + err));