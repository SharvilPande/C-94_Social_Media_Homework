//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyCGbBrH17txWa7VQKQAzFPKtTuvSdK9aAg",
    authDomain: "kwitter-app-homework.firebaseapp.com",
    projectId: "kwitter-app-homework",
    storageBucket: "kwitter-app-homework.appspot.com",
    messagingSenderId: "1019848816019",
    appId: "1:1019848816019:web:4dcb2b7ef05def36c72466"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
Room_names = childKey; 

    });});}
getData();