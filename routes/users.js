const express = require("express");
const db = require("../firebase_config");
const { async } = require("@firebase/util");

const router = express.Router();

router.get("/users/", async (req, res) => {
  let users = [];
  //   await db
  //     .collection("users")
  //     .get()
  //     .then((docs) =>
  //       docs.docs.map((doc) => {
  //         users.push(doc.data());
  //       })
  //     );
  //   res.status(200).json({ users });

  await db.collection("users").onSnapshot((snapshot) => {
    snapshot.docs.map((doc) => {
      users.push(doc.data());
    });
    return res.status(200).json({ users });
  });
});

router.get("/posts/", async (req, res) => {
  let posts = [];
    await db
      .collection("posts")
      .get()
      .then((docs) =>
        docs.docs.map((doc) => {
          posts.push(doc.data());
        })
      ).then(()=>{
        res.status(200).json({ posts });
      })
  // try {
  //   await db.collection("posts").onSnapshot((snapshot) => {
  //     snapshot.docs.map((doc) => {
  //       posts.push(doc.data());
  //     });
  //     return res.status(200).json({ posts });
  //   });
  // } catch (error) {
  //   res.status(404).json({error})
  // }
});


router.get("/locations/", async (req, res) => {
  try {
    const locations = []
    await db
      .collection("posts")
      .get()
      .then((docs) =>
        docs.docs.map((doc) => {
          const latitude = doc.data().latitude;
          const longitude = doc.data().longitude;
          locations.push({longitude, latitude})
        })
      );
    res.status(200).json({ locations });
  } catch (error) {
    res.status(404).json({error})
  }
  // try {
  //   await db.collection("posts").onSnapshot((snapshot) => {
  //     snapshot.docs.map((doc) => {
  //       posts.push(doc.data());
  //     });
  //     return res.status(200).json({ posts });
  //   });
  // } catch (error) {
  //   res.status(404).json({error})
  // }
});

router.get("/requests/", async (req, res) => {
  let requests = [];
  //   await db
  //     .collection("seedlings-request")
  //     .get()
  //     .then((docs) =>
  //       docs.docs.map((doc) => {
  //         requests.push(doc.data());
  //       })
  //     );
  //   res.status(200).json({ requests });
  await db.collection("seedlings-request").onSnapshot((snapshot) => {
    snapshot.docs.map((doc) => {
      requests.push(doc.data());
    });
    return res.status(200).json({ requests : requests });
  });
});

module.exports = router;



//TWO
// const express = require("express");
// const db = require("../firebase_config");
// const { async } = require("@firebase/util");

// const router = express.Router();

// router.get("/users/", async (req, res) => {
//   db.collection("users").onSnapshot((snapshot) => {
//     let users = [];
//     snapshot.docs.forEach((doc) => {
//       users.push(doc.data());
//     });
//     res.status(200).json({ users });
//   });
// });

// router.get("/posts/", async (req, res) => {
//   db.collection("posts").onSnapshot((snapshot) => {
//     let posts = [];
//     snapshot.docs.forEach((doc) => {
//       posts.push(doc.data());
//     });
//     res.status(200).json({ posts });
//   });
// });

// router.get("/requests/", async (req, res) => {
//   db.collection("seedlings-request").onSnapshot((snapshot) => {
//     let requests = [];
//     snapshot.docs.forEach((doc) => {
//       requests.push(doc.data());
//     });
//     res.status(200).json({ requests });
//   });
// });

// module.exports = router;



//THREEE
// const express = require("express");
// const db = require("../firebase_config");
// const { async } = require("@firebase/util");

// const router = express.Router();

// router.get("/users/", async (req, res) => {
//   db.collection("users").onSnapshot((snapshot) => {
//     let users = [];
//     snapshot.docs.forEach((doc) => {
//       users.push(doc.data());
//     });
//     res.status(200).json({ users });
//   }, (error) => {
//     console.log(error);
//     res.status(500).send("An error occurred while retrieving the data from the Firestore collection.");
//   });
// });

// router.get("/posts/", async (req, res) => {
//   db.collection("posts").onSnapshot((snapshot) => {
//     let posts = [];
//     snapshot.docs.forEach((doc) => {
//       posts.push(doc.data());
//     });
//     res.status(200).json({ posts });
//   }, (error) => {
//     console.log(error);
//     res.status(500).send("An error occurred while retrieving the data from the Firestore collection.");
//   });
// });

// router.get("/requests/", async (req, res) => {
//   db.collection("seedlings-request").onSnapshot((snapshot) => {
//     let requests = [];
//     snapshot.docs.forEach((doc) => {
//       requests.push(doc.data());
//     });
//     res.status(200).json({ requests });
//   }, (error) => {
//     console.log(error);
//     res.status(500).send("An error occurred while retrieving the data from the Firestore collection.");
//   });
// });

// module.exports = router;
