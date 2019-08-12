const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//User Schema
const SupplierSchema = mongoose.Schema({
    name :{
        type: String
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
        type: Number,
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

