const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//User Schema
const SupplierSchema = mongoose.Schema({
    name :{
        type: String,
        unique : true, 
        required : true,
        dropDups: true
    },
    category :{
        type: String,
        required: true
    },
    bank :{
        type: String,
        required: true
    },
    nuban :{
        type: String,
        required: true
    },
    recipient_code:{
        type: String,
        required: true
    }
});

const Supplier = module.exports = mongoose.model('Supplier ', SupplierSchema);

module.exports.getSupplierById = function(id, callback){
    Supplier.findById(id, callback);     
}

module.exports.getSupplierByName = function(name, callback){
    const query = {name: name}
    Supplier.findOne(query, callback);
}

module.exports.addSupplier = function(newSupplier, callback){
            newSupplier.save(callback);
}

module.exports.findByNameAndUpdate  = function(name, callback){
    newSupplier.save(callback);
}

