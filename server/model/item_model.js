// const { timeStamp } = require('console');
const mongoose = require('mongoose');
const item_model = new mongoose.Schema({

     item_name: {
        type: String
    },
  
});


const item_info= mongoose.model('item_info', item_model);
module.exports = item_info ;