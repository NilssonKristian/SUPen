const mongoose = require('mongoose');

mongoose.connect('mongodb://Admin:omD6ulbsbaAzfzM6@cluster0-shard-00-00-iios2.mongodb.net:27017,cluster0-shard-00-01-iios2.mongodb.net:27017,cluster0-shard-00-02-iios2.mongodb.net:27017/test?replicaSet=Cluster0-shard-0&ssl=true&authSource=admin',
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connection: Succeded"))
    .catch(err => console.log("MongoDB connection: Failed. " + err));