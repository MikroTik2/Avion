const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const cors = require("cors");
const morgan = require("morgan");
const dbConnect = require("./config/dbConnect.js");
const { notFound, errorHandler } = require("./middleware/errorHandler.js");
const dbconnecting = new dbConnect();

dbconnecting.connecting();

const productRoute = require("./routes/productRoute.js");

const PORT = process.env.PORT || process.env.PORT_NODE;
const app = express();
app.use(cors({ origin: "https://avion-client.vercel.app", optionsSuccessStatus: 204, methods: "GET,HEAD,PUT,PATCH,POST,DELETE", credentials: true }));
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/product", productRoute);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
     console.log(`==> Server working on the http://localhost:${PORT}`);
});