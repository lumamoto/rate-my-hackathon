const mongoose = require('mongoose');

require('dotenv').config();
const db = process.env.ATLAS_URI;

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
    logger.info("Establishing connection to database...")

    connection.on("error", (err) => {
        logger.error("Encountered error while establishing connection to database");
    })
    connection.once('open', () => {
        logger.info("Database connection to " + database_name + " successfully established");
    })

    connectDB = connection;

  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }

  return connectDB;
};