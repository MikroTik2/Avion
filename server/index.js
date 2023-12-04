const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const cors = require("cors");
const dbConnect = require("./config/dbConnect.js");
const { notFound, errorHandler } = require("./middleware/errorHandler.js");

dbConnect();

const productRoute = require("./routes/productRoute.js");

const PORT = process.env.PORT || process.env.PORT_NODE;
const app = express();

const corsOptions = {
     origin: "http://localhost:5173", // Allow requests from this origin
     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
     credentials: true, // Allow sending cookies and other credentials
     optionsSuccessStatus: 204, // Some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/product", productRoute);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
     console.log(`==> Server working on the http://localhost:${PORT}`);
});