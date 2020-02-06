var express = require('express');
const path = require('path');
var admin = require('firebase-admin');

var Promise = require('promise');
var app = express();
app.get('/', function (req, res) {
  res.sendFile(__dirname+'/src/view/inicio.html');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


var serviceAccount = require(`../private/serviceAccountKey.json`);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://obs-controller-using-nodejs.firebaseio.com"
});
const db = admin.firestore();


let cityRef = db.collection('obs-controller').doc('instructions');
let getDoc = cityRef.get()
  .then(doc => {
    if (!doc.exists) {
      console.log('No such document!');
    } else {
      console.log('Document data:', doc.data());
    }
  })
.catch(err => {
  console.log('Error getting document', err);
});


/*
let setSf = citiesRef.doc('obs-controller').set({
  controller_check: 'San Francisco', date: 'CA', id: 'USA',
  obs_check: false, orden: 860000
});

*/
