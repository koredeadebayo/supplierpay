const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');
const Supplier = require('./supplier');

//User Schema
const PaymentSchema = mongoose.Schema({
    supplier :{
        type: String,
        required : true
    },
    purpose :{
        type: String,
        required: true
    },
    amount :{
        type: String,
        required: true
    },
    date :{
        type: Date,
        default: Date.now()
    }
});

const Payment = module.exports = mongoose.model('Payment ', PaymentSchema);

module.exports.getPaymentById = function(id, callback){
    Payment.findById(id, callback);     
}

module.exports.addPayment = function(newPayment, callback){
            newPayment.save(callback);
}