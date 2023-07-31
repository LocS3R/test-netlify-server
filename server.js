const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/hello", (req, res) => {
  console.log("Received a request from the client!");
  res.send("Hello from Node.js on Netlify!");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
