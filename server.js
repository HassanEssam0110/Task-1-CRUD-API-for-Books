import app from "./src/app.js";
import path from "path";
import { config } from "dotenv";
import connectDB from "./src/database/db_connection.js";

config({ path: path.resolve(".env") }); // Load environment variables from a .env file into process.env

const port = process.env.PORT || 3000;

await connectDB(); // Connect to the database

app.listen(port, () => {
  console.log(
    `Server is running on port ${port} - ${process.env.NODE_ENV} Mode`
  );
});
