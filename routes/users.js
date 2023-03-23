const express = require("express");
const db = require("../firebase_config");
const { async } = require("@firebase/util");

const router = express.Router();

router.get("/users/", async (req, res) => {
    let users = [];
  await db.collection("users")
    .get()
    .then((docs) =>
      docs.docs.map((doc) => {users.push(doc.data())})
    );
    res.status(200).json({users});
});

router.get("/posts/", async(req, res) => {
    let posts = [];
  await db.collection("posts")
    .get()
    .then((docs) =>
      docs.docs.map((doc) => {posts.push(doc.data())})
    );
    res.status(200).json({posts});
});

router.get("/requests/", async(req, res) => {
    let requests = [];
  await db.collection("seedlings-request")
    .get()
    .then((docs) =>
      docs.docs.map((doc) => {requests.push(doc.data())})
    );
    res.status(200).json({requests});
});

module.exports = router;
