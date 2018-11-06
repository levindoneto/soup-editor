// Initialize Firebase
var config = {
  apiKey: "AIzaSyCVhzf6EveM2AZ-Frzv16YGw5bHGLTXnm4",
  authDomain: "soup-editor.firebaseapp.com",
  databaseURL: "https://soup-editor.firebaseio.com",
  projectId: "soup-editor",
  storageBucket: "soup-editor.appspot.com",
  messagingSenderId: "903504320118"
};

// Initi DB
var soupDB = firebase.initializeApp(config);

console.log(soupDB.storage());
console.log(soupDB.database());
