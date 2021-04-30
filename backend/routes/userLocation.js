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

router.get ('/findnearesthospital', async (req, res) => {
    const {latitude, longitude, pincode} = req.body ;
    
    const allData = db.get('hospitals');
    
    const api = allData.find( { "VIDAL NETWORK LIST" } )
    console.log(api);

})

module.exports = router ;