const mongoose = require('mongoose');
const date = new Date;

// Ska eventuellt användas för att spara användare till databasen vid ett senare tillfälle. Just nu används den inte.
// Skapar ett schema som anpassas för att skapa användare i för att sedan exportera schemat så att det kan användas i andra filer.
const UserSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    Date: {
        type: String,
        required: true,
        default:
            date.getFullYear + '' +
            date.getMonth + '' +
            date.getDay
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;