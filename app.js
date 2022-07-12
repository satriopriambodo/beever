const express = require("express");
const app = express();
const port = 3000;
const route = require("./routes/index");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(route);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
