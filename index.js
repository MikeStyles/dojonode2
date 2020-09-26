const express = require("express");
const cors = require("cors");
const app = express();

const corsOptions = {
  origin: "http://localhost:3000/",
};

app.use(cors(corsOptions));

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Server is running in the port: " + PORT);
});

app.get("/", async function (req, res) {
  res.send("Espoti fai");
});