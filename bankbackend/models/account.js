const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const accountSchema = new Schema({
    id : {
        type: Number,
        required: true
    },
    name : {
        type: String,
        required: true
    },  
    nic : {
        type: String,
        required: true
    },
    balance : {
        type: Number,
        required: true
    },

});

const Account = mongoose.model("Account",accountSchema);

module.exports = Account;