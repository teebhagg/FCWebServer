const express = require("express");
const cors = require("cors");
const { json } = require("body-parser");
const router = require('./routes/users')

var db = require("./firebase_config");

const app = express();
app.use(cors());
app.use(json());

const PORT = 4000;

app.listen(PORT, async () => {
  console.log("Server Running");
  app.use(router);
  console.log('DB Connected')
  // console.log(((await db.collection('users').get()).docs))
});
