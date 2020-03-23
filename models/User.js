const mongoose = require('mongoose');
const date = new Date;

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