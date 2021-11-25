const mongoose = require('mongoose');  //for connect mongoDB to assign mongoose for the variable

const Schema = mongoose.Schema;

const customerSchema = new Schema({

    id : {
        type :Number,
        required: true   //when no value for idNum,do not pass data for database
    },
    full_name : {
        type : String,
        required: true
    },
    birth_date : {
        type : Date,
        required: true
    },
    acc_num : {
        type :Number,
        required: true
    }
})

const Customer = mongoose.model("Customer",customerSchema);
module.exports = Customer;