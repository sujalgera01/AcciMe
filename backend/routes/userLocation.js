const express = require('express')
require('dotenv').config();
const Location = require ('../models/location')
var monk =require('monk')
const url = process.env.MONGOURI
const db = monk(url)
var mongo = require('mongodb')

const router = express.Router();

router.post ('/enteruserdata', async (req, res) => {
    const {latitude, longitude, pincode} = req.body ;
    try {
        const location = new Location ({latitude, longitude, pincode})
        // await location.save()
        res.json(location);
    } catch (e) {
        console.log(e);
        res.json (e);
    }
})

router.get ('/findnearesthospital/:id', async (req, res) => {
    const id = req.params.id ;
    const {latitude, longitude, pincode} = req.body;
    
    const allData = db.get('hospitals');
    console.log(pincode);
    console.log(id);
    allData.find( { "VIDAL NETWORK LIST.Pin Code" : id} , (err, data) => {
        console.log(data);
        res.json(data);
    })

})

module.exports = router ;