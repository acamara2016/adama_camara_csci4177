const express = require('express');
const router = express.Router();
const users = require('../model/userModel');
const { searchUser, addUser } = require('../controllers/userController');
const {v4} = require('uuid');


router.get('/',(req, res)=>{
    res.status(200).json(users)
})


router.post('/register', (req, res)=>{
    try {
        const {email,username} = req.body
        console.log("Email here :"+email)
        const emailCheck = searchUser("email", email);
        const userNameCheck = searchUser("userName", username);
        if(!emailCheck){
            return res.status(400).json({
                message: "This email has already been used"
            })
        }else if(!userNameCheck){
            return res.status(400).json({
                message: "This username has already been used"
            })
        }
        else{
            addUser(
                v4(),
                username,
                email,
                "0"
            );
        }
        res.json(req.body);
    } catch (error) {
        console.log(error)
        res.status(406).json({
            success : false,
            error : "User not added"
        })
    }
  
})

router.put('/usernames/editUser', (req, res)=>{
    try {
    const current_username = req.body.current_username;
    const new_username = req.body.new_username;
    const result = updateUsername("userName",current_username, new_username);
    console.log(result);
    res.json(req.body);

    } catch (error) {
        console.log(error)
    }
})


router.get('/:userName', (req, res)=>{
    try {
        const user = searchUser("userName",req.params.userName)
        res.status(200).json(user)    
    } catch (error) {
        console.log(error)
    }
    
})

module.exports = router;