import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.CONNECTION_DB_URI);
    console.log(`Database connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Database connection error: ${error.message}`);
    process.exit(1); // Exit if connection fails
  }
};

export default connectDB;
