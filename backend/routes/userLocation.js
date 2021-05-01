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
        await location.save()
        res.json(location);
    } catch (e) {
        console.log(e);
        res.json (e);
    }
})

router.get('/reportedAccident', async (req, res) => {
    const allData = db.get('locations')
    allData.find ({}, (err, data) => {
        res.json(data);
    })
})

router.get ('/findnearesthospital/:id', async (req, res) => {
    const id = req.params.id ;
    const allData = db.get('hospitals');
    console.log(id);

    allData.find( { "State" : id} , (err, data) => {
        const newIndex = Math.floor(Math.random() * 20) + 1; 
        
        const dynamic = data[newIndex]
        res.json(dynamic);
    })

})

module.exports = router ;