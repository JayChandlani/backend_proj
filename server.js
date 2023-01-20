const dotenv = require('dotenv')
dotenv.config();
const express = require('express');
const morgan = require('morgan');
const bodyparser = require('body-parser')
const app = express();
const path = require('path')
const PORT = process.env.PORT || 8080;
const connectDB = require('./server/database/connection')
const cors = require('cors');

// setting origen 
app.use(cors({origin:"http://localhost:3000"}))
// log requests
app.use(morgan('tiny'));
connectDB();
// parse request to bodyparser
app.use(bodyparser.urlencoded({ extended: true }));

// set viewingine
app.set('view engine', 'ejs')

// load assets 
app.use('/css', express.static(path.resolve(__dirname, 'assets/css')))
// app.use('/img', express.static(path.resolve(__dirname, 'assets/img')))
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')))


// importing routes from router file 
app.use('/',require('./server/routes/router'));

app.listen(PORT, () => {
    console.log('Server Running on Port ' + PORT);
})