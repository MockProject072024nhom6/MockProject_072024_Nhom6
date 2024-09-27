const process = require("../.env");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const rootRouter = require("./routers/rootRouter");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(rootRouter);

const port = process.PORT || 8000;
app.listen(port, () => {
  console.log(`server is running on PORT: ${port}`);
});
