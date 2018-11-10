// Initialize Firebase
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

function testData(data) {
  console.log("data: ", JSON.parse(data));
  console.log("type data: ", typeof data);
}

function addTrainingSet(clientId, trainingSet, goToProduction) {
  firebase.database().ref('clients/' + clientId).set({
    updateDate: new Date().toDateString(),
    trainingSet: JSON.parse(trainingSet),
    goToProduction: goToProduction
  });
}
