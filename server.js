const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());
const port = 3001;
const rootUrl = "https://jsonplaceholder.typicode.com/todos/";

let config = {
  headers: {
    Authorization: "",
  },
};

app.get("/todos", async (req, res) => {
  let result = await axios.get(rootUrl);
  console.log(result.data);
  res.send(result.data);
});

app.listen(port);
console.log(`Server started @ ${port}`);

module.exports = app;
