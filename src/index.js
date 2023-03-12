const express = require("express");
const app = express();
const route = require("./route");
const connection = require('./config')

app.use(express.json());
app.use('/',route)

app.listen(process.env.PORT || 3000, function () {
  console.log("express running on PORT " , (process.env.PORT || 3000));
});







