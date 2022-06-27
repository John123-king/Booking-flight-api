const express = require("express");
const { json, request, response } = require("express");
const flights = require("./controllers/flightController");
const models = require("./models/Flight");
const { route } = require("./routes/flightRoute");
const routes = require("./routes/flightRoute");

const app = express();

const flight = require("./routes/flightRoute")
app.get('/', function(require, response){
  response.send('hello world')
});

app.use(json());

// app.use("/", routes);

app.use("/flight", flight);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
