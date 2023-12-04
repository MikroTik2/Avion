const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const dbConnect = require("./config/dbConnect.js");
const { notFound, errorHandler } = require("./middleware/errorHandler.js");

dbConnect();

const productRoute = require("./routes/productRoute.js");

const PORT = process.env.PORT || process.env.PORT_NODE;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/product", productRoute);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
     console.log(`==> Server working on the http://localhost:${PORT}`);
});