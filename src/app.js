import express from "express";
import morgan from "morgan";
import compression from "compression";
import { bootstrap } from "./modules/index.modules.js";

const app = express();

/*Middlewares */
if (process.env.NODE_ENV === "production") {
  app.use(morgan("combined"));
} else {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(compression()); // Compress responses

/* Routes */
bootstrap(app);

export default app;
