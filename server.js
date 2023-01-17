const express = require('express');
const morgan = require('morgan');
const bodyparser = require('body-parser')
const app = express();
const path = require('path')
const PORT = process.env.PORT || 8080;

// log requests
app.use(morgan('tiny'));

// parse request to bodyparser
app.use(bodyparser.urlencoded({ extended: true }));

// set viewingine
app.set('view engine','ejs')

// load assets 
app.use('/css',express.static(path.resolve(__dirname,'assets/css')))
app.use('/img',express.static(path.resolve(__dirname,'assets/img')))
app.use('/js',express.static(path.resolve(__dirname,'assets/js')))


app.get('/', (req, res) => {
res.send('Hello Jay Chandlani')
})

app.listen(PORT, () => {
    console.log('Server Running on Port ' + PORT);
})