const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config({path: '/.env'});
const db = process.env.ATLAS_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(
      db,
      {
        useNewUrlParser: true,
        useCreateIndex: true, 
        useUnifiedTopology: true
      }
    );

    console.log('MongoDB is Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;