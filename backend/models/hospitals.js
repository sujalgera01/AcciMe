const mongoose = require('mongoose')

const hospitalSchema = new mongoose.Schema({
    state : {
        type: String
    }, 
    city : {
        type: String
    },
    hospitalId : {
        type: String
    },
    hospitalName : {
        type: String
    },
    address: {
        type: String
    },
    pincode : {
        type: String
    },
    phoneNumber : {
        type: String
    }
})

module.exports = mongoose.model('Hospitals', hospitalSchema);