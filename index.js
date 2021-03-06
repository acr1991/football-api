// importing dependencies
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

const teamRouter = require("./team/router");

app.use(jsonParser);
app.use(teamRouter);
//DO NOT CODE UNDER THIS LINE
// make the app listen on a the port we specified
app.listen(port, () => console.log("listening on port ", port));

// app.get("/user", (req, res) => {
//   res.send("hello");
// });
