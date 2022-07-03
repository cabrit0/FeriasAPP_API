const express = require("express");
const dotenv = require("dotenv").config();
var cors = require("cors");
const colors = require("colors");
const connectDB = require("./config/db");
const { errorHandler } = require("./middlewares/errorMiddleware");
const moment = require("moment");
const dateFormat = moment(new Date()).format("DD/MM/YYYY");

const PORT = process.env.PORT || 5000;

connectDB();
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/v1/ferias", require("./routes/feriasRoutes"));
app.use("/api/v1/users", require("./routes/userRoutes"));

app.use(errorHandler);

app.listen(PORT, () =>
  console.log(`-> Server is UP!\nListening on Port ${PORT}`)
);
