const express = require("express");
const createError = require("http-errors");
const app = express();
const port = 3000;
const routers = require("./routes/sensores.js");

app.get("/",(req, res)=>{
  res.send("...");
});
app.use("/", routers);

app.use(async (req, res, next) => {
  next(createError.NotFound("Route does not exist!"));
});

app.use((err, req, res, next) => {
  console.log(err.message);
  const status = err.status || 500;
  res.status(status).send({ data: err.message });
});

app.listen(port, function () {
  console.log(`listening on port ${port}!`);
});