const mongoose = require('mongoose');

require('dotenv').config();
const db = process.env.ATLAS_URI;

let connectDB = null;

module.exports = async () => {
  try {
    await mongoose.connect(
      db,
      {
        useNewUrlParser: true,
        useCreateIndex: true, 
        useUnifiedTopology: true
      }
    );
    const connection = mongoose.connection;
    console.log("Establishing connection to database...")

    connection.on("error", (err) => {
      console.error("Encountered error while establishing connection to database");
    })
    connection.once('open', () => {
      console.log("Database connection to " + database_name + " successfully established");
    })

    connectDB = connection;
    console.log('connectDB: ' + connectDB);

  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }

  return connectDB;
};