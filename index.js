const express = require("express");
const cors = require("cors");
const { json } = require("body-parser");
const router = require('./routes/users')

var db = require("./firebase_config");

const app = express();
app.use(cors());
app.use(json());

const PORT = 4000;

const posts = []
db.collection('post').onSnapshot(snapShot=>{
  snapShot.docs.map(element=>{
    posts.push(element.data())
  })
  // res.status(200).json({ posts })
})

app.listen(PORT, async () => {
  app.use(router);
  console.log("Server Running");
  console.log('DB Connected')
  // console.log(((await db.collection('users').get()).docs))
});
