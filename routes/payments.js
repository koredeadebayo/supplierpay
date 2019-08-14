const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const Payment = require('../models/payment');
const Supplier = require('../models/supplier');
const config = require('../config/database');
const Request = require('request');

//{"source": "balance", "reason": "Calm down", "amount":3794800, "recipient": "RCP_gx2wn530m0i3w3m"}'
 router.post('/make', (req, res, next) =>{

    const name = req.body.supplier;
    const purpose = req.body.purpose;
    const amount = req.body.amount;
    // console.log(req.body.supplier);
    Supplier.getSupplierByName(name, (err, supplier) => {
        if (err) throw (err);
        if(!supplier){
            res.json('Supplier not found');
        }else{
            // console.log(supplier);
            Request.post({
                "headers": {"Authorization": "Bearer "+ config.paySecret, "content-type": "application/json" },
                "url": "https://api.paystack.co/transfer",
                "body": JSON.stringify({
                    "source": "balance",
                    "reason": req.body.purpose,
                    "amount":req.body.amount,
                    "recipient": supplier.recipient_code
                    }) 
                }, (err, response, body)=>{
                    if(err){
                    response.json(err);
                    }else{
                    console.log(body);    
                    const newPayment = new Payment({
                        supplier :supplier.name,
                        purpose : purpose,
                        amount : amount
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