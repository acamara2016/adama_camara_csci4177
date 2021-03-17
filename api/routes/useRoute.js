const express = require('express');
const router = express.Router();
const userModel = require('../model/userModel');


router.get('/',(req, res)=>{
    userModel.find()
    .exec()
    .then(data=>{
        console.log(data);
        res.status(200).json(data)
    })
    .catch(err=>{console.log(err);})
})

router.get('/:username',(req, res)=>{
    userModel.findOne({userName: req.params.username})
    .exec()
    .then(data=>{
        console.log(data);
        res.status(200).json(data)
    })
    .catch(err=>{console.log(err);})
})



module.exports = router;