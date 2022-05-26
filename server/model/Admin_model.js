// const { timeStamp } = require('console');
const mongoose = require('mongoose');
const Admin_model = new mongoose.Schema({

     Request: {
        type: String
    },
    time : { type : Date, default: Date.now },
 
 
 
  
 
  
});


const admin_info= mongoose.model('Digitalxc', Admin_model);
module.exports = admin_info ;