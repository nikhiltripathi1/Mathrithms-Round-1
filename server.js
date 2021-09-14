const express = require("express");
const users = require("./userdata.json");

const app = express();
//middlewares
app.use(express.json());

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/:id", (req, res) => {
  user = users.find((ele) => {
    if (ele.id == req.params.id) {
      return ele;
    }
  });
  res.json(user);
});

app.listen(5001, () => {
  console.log("Server started listening at Port 5001!!");
});
