// Initialize the database
var config = {
    apiKey: "AIzaSyCVhzf6EveM2AZ-Frzv16YGw5bHGLTXnm4",
    authDomain: "soup-editor.firebaseapp.com",
    databaseURL: "https://soup-editor.firebaseio.com",
    projectId: "soup-editor",
    storageBucket: "soup-editor.appspot.com",
    messagingSenderId: "903504320118"
};

// Init DB
var soupDB = firebase.initializeApp(config);