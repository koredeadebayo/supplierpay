const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const Supplier = require('../models/supplier');
const config = require('../config/database');



//Create Supplier
router.post('/add', passport.authenticate('jwt', {session: false}), (req, res, next)=>{
    const newSupplier = new Supplier({
        name: req.body.name,
        category: req.body.category,
        bank: req.body.bank,
        nuban: req.body.nuban
    });
    // console.log(req.body.name);

    Supplier.addSupplier(newSupplier, (err, supplier) =>{
        if(err){
            res.json({success: false, msg: 'Failed to register Supplier'});
        }else{
            res.json({success: true, msg: 'Supplier has been successfully added'});
        }
    });
});

//List Supplier
router.get('/list', (req, res, next)=>{
    Supplier.find(function (err, suppliers){
        if(err) throw(err);
        else {
            res.json(suppliers);
        }
    });
});

//Edit Supplier
router.post('/update/:name',  (req, res, next)=>{
    // console.log(req.params.id);
    // res.send('It is working');
    let name = req.params.name;
    Supplier.getSupplierByName(name, function(err, supplier){
        // console.log(req.params.id);
         if(!supplier){
             res.json({success: false, msg:'Supplier does not exist'});
        }else{
             supplier.name = req.body.name;
             supplier.category = req.body.category;
             supplier.bank = req.body.bank;
             supplier.nuban = req.body.nuban;

             supplier.save().then(supplier =>{
                 res.json('Supplier Updated');
             }, error=>{
                 res.json('Something went wrong. Unable to Update Supplier');
             })
        }
     });
});

//Get single supplier
router.get('/edit/:name', passport.authenticate('jwt', {session: false}), (req, res, next) =>{
    let name = req.params.name;
    Supplier.getSupplierByName(name, function(err, supplier){
        if(err) throw (err);
        else{
            res.json(supplier);
        }
    });
}); 

//Get a delete supplier
router.get('/delete/:id', passport.authenticate('jwt', {session: false}), (req, res, next) =>{
    Supplier.findByIdAndRemove({_id:req.params.id}, function(err, supplier){
        if(err) throw(err);
        else{
            res.json('Successfully removed');
        }
    });
});

module.exports = router; 