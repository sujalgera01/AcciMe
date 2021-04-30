const mongoose = require('mongoose')

const locationSchema = new mongoose.Schema({
    latitude : {
        type: String
    }, 
    longitude : {
        type: String
    },
    pincode : {
        type: Number
    }
})

module.exports = mongoose.model('Locations', locationSchema);