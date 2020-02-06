var express = require('express');
const path = require('path');
var admin = require('firebase-admin');
var app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname+'/src/view/inicio.html');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


var serviceAccount = require("private/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://obs-controller-using-nodejs.firebaseio.com"
});




/*
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.8.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA3-kh8PcJSu338XQvIHVBlcgy7icetHTI",
    authDomain: "obs-controller-using-nodejs.firebaseapp.com",
    databaseURL: "https://obs-controller-using-nodejs.firebaseio.com",
    projectId: "obs-controller-using-nodejs",
    storageBucket: "obs-controller-using-nodejs.appspot.com",
    messagingSenderId: "317645926888",
    appId: "1:317645926888:web:216116143ac53a053af45d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>

*/