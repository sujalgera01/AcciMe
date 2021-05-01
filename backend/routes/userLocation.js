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
    
    const allData = db.get('hospitals');
    
    console.log(id);
    allData.find( { "VIDAL NETWORK LIST.Pin Code" : id} , (err, data) => {
        const check = data[0];
        const newWorld = check["VIDAL NETWORK LIST"];
        var newIndex = Math.floor(Math.random() * 6000) + 1; 
        console.log(newIndex)
        res.send((check["VIDAL NETWORK LIST"][newIndex]));
    })

})

module.exports = router ;15