const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/UserData",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log("Connection is sucsessfully"))
.catch((e)=>console.log("No Connection")); 