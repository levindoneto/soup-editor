/** Function for saving training sets into the database.
* @param {string} clientId Company's name.
* @param {boolean} goToProduction boolean indicating whether the training set shall be used in production mode.
* @return {void} It only updates the database.
*/
function saveTrainingSet(clientId, goToProduction) {
    firebase.database().ref('clients/' + clientId).set({
        updateDate: new Date().toDateString(),
        trainingSet: JSON.parse(editor.getText()),
        goToProduction: goToProduction
    });
}

/** Function for loading the most recent training set from the database or the current one in production mode.
* @param {string} clientId Company's name.
* @param {boolean} loadProd if it's true, the training set in prod for the indicated client will be loaded,
                            if it's false, the most recent training set will be loaded.
* @return {void} It only loads the training set into the editor.
*/
function loadTrainingSet(clientId, loadProd) {
    firebase.database().ref('clients/' + clientId).once('value').then(function(snapshot) {
        editor.setText(JSON.stringify(snapshot.val().trainingSet));
    });
}