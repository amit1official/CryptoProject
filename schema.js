const mongoose = require("mongoose");  
const UserSchema = new mongoose.Schema({
    no:{
        type: Number,
        
    },
    base_unit:{
        type: String,
        requried: true
    },
    quote_unit:{
        type: String,
        requried: true
    },
    low:{
        type: Number,
        requried: true
        
    },
      
    high:{
        type: Number,
        requried: true 
    },
    last:{
        type: Number,
        requried: true
        
    },
    
    type:{
        type: String,
        requried: true
        
    },
    open:{
        type: Number,
        requried: true
        
    },
    volume:{
        type: Number,
        requried: true
    },
    buy:{
        type: Number,
        requried: true,
    },
    sell:{
        type: Number,
        requried: true
    },
    at:{
        type: Number,
        requried: true
    },
    name:{
        type: String,
        requried: true
    }

})

const personData = new mongoose.model('UserData', UserSchema );
module.exports = personData;