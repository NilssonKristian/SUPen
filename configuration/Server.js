// Använder mongoose för att koppla till databasen.
const mongoose = require('mongoose');

// Kopplar till databasen med hjälp av mongoose.connect. Skickar med vissa options för att databasen ska fungera som det är tänkt.
// Loggar sedan ifall man lyckades eller inte. Om man inte lyckas så loggas även ett felmeddelande för att beskriva felet.
mongoose.connect('mongodb://Admin:omD6ulbsbaAzfzM6@cluster0-shard-00-00-iios2.mongodb.net:27017,cluster0-shard-00-01-iios2.mongodb.net:27017,cluster0-shard-00-02-iios2.mongodb.net:27017/test?replicaSet=Cluster0-shard-0&ssl=true&authSource=admin',
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connection: Succeded"))
    .catch(err => console.log("MongoDB connection: Failed. " + err));