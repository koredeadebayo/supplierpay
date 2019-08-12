const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const Payment = require('../models/payment');
const Supplier = require('../models/supplier');
const config = require('../config/database');



 router.post('/make', (req, res, next) =>{
    const name = req.body.supplier;
    console.log(req.body.supplier);
    Supplier.getSupplierByName(name, (err, supplier) => {
        if (err) throw (err);
        if(!supplier){
            res.json('Supplier not found');
        }else{
            const newPayment = new Payment({
                supplier :supplier.name,
                purpose : req.body.purpose,
                amount : req.body.amount
            });   
            Payment.addPayment(newPayment, (err, payment)=>{

                if(err){
                    res.json('Oops! Something went wrong');
                } else{
                    res.json('Congratulations. Your payment is successful');
                }
            })
        }
        
    });
    
 router.get('/list', (req, res, next)=>{
    Payment.find(function(err, payments){
        if(err) throw (err);
        else{
            res.json(payments);
        }
    });
 });

 });





















module.exports = router; 