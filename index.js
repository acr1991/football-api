// importing dependencies
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

//DO NOT CODE UNDER THIS LINE
// make the app listen on a the port we specified
app.listen(port, () => console.log("Listening on port ", port));

app.get("/user", (req, res) => {
  res.send("hello");
});
