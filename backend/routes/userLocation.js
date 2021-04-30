const express = require('express')
const passport = require('passport')
const Location = require ('../models/location')

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

module.exports = router ;