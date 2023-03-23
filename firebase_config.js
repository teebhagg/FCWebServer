const {
    initializeApp,
    applicationDefault,
    cert,
  } = require("firebase-admin/app");
  const {
    getFirestore,
    Timestamp,
    FieldValue,
  } = require("firebase-admin/firestore");
  
var admin = require("firebase-admin");

var serviceAccount = require("./web-app-server.json");

initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
  
  const db = getFirestore();
  
  module.exports = db;

