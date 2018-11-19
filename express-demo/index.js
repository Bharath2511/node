const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/api/courses", (req, res) => {
  res.send([1, 2, 3]);
});

app.get("/api/courses/:year/:month", (req, res) => {
  res.send(req.params);
  res.send(req.query); //?sortedBy=name
});

//PORT
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(port);
});
