const express = require("express");
const router = express.Router();
const User = require('./schema');

// create a new user 
// app.post('/user',(req,res)=>{
//     console.log(req.body);
//     const userdata = new User(req.body)
//     userdata.save().then(() => {
//         res.status(201).send(userdata)
//         return;
//     }).catch((err) => {
//         res.status(400).send(err);
//     });

// post data with async await 
router.post('/user',async (req,res)=>{
    try {
        const userdata = new User(req.body)
        const createUser = await userdata.save()
        res.status(201).send(createUser)
    }catch(err){
    res.status(400).send(err);
    };
})


// getdata
router.get('/user',async (req,res)=>{
    try {
        const CreateUsersData = await User.find()
    res.send(CreateUsersData)
    } catch (error) {
        res.status(500).send(error);
    }

})


// get the indivisual User data by Id
router.get('/user/:id',async (req,res)=>{
    try {
        const _id = req.params.id;
        const CreateUserData = await User.findById(_id);
        console.log(CreateUserData);
        if(!CreateUserData){
            return res.status(404).send();
        }else{
            res.send(CreateUserData);
        }
    } catch (error) {
        res.send(error);

    }
})
module.exports = router;
