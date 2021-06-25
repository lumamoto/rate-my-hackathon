const mongoose = require('mongoose');

require('dotenv').config();
const db = process.env.ATLAS_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(
      db,
      {
        useNewUrlParser: true,
        useCreateIndex: true, 
        useUnifiedTopology: true,
        useFindAndModify: false
      }
    );
    console.log('MongoDB is Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;