const mongoose = require('mongoose')
require('dotenv').config();

mongoose.connect(process.env.MONGOURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
}).then(() => {
    console.log('MongoDB Connected !!')
}).catch((err) => {
    console.log(err)
})
mongoose.Promise = global.Promise;