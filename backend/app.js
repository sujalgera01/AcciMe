const express = require('express');
const bodyParser = require('body-parser')
const passport = require('passport')
const cors = require('cors')

require('./database/mongoose')

const app = express ();

const PORT = process.env.PORT || 3000 

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.use('/user', require('./routes/userLocation'));

app.listen(PORT, console.log(`Server Running on Port ${PORT}`))