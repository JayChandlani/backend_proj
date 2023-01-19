const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config();

const connectDB = async () => {
    try {
        const con = await mongoose.connect(process.env.URL);
        console.log('mongodb connected ' + con.connection.host);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;