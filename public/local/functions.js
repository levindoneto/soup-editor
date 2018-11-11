/** Function for importing data from the file system.
  * @param {void}
  * @return {void} It only imports the file chosen by the user.
  */
function importTrainingSet() {
    FileReaderJS.setupInput({
        readAsDefault: 'Text',
        on: {
            load: function (event, file) {
                editor.setText(event.target.result);
          }
        }
    });    
}

/** Function for exporting data to the file system.
  * @param {void}
  * @return {void} It only updates the database.
  */
 function exportTrainingSet() {
    // Saving Dialog for choosing the name of the file to be saved
    filename = window.prompt('Salvar como...');
    if (filename != null) {
        // Check json extension in file name
        if(filename.indexOf('.') == -1) {
            filename = filename.concat(".json");
        } else if(filename.split('.').pop().toLowerCase() != 'json') {
            filename = filename.split('.')[0].concat('.json');
        } else {
            console.log('Verify the extension of the file');
        }
        var blob = new Blob([editor.getText()], {type: 'application/json;charset=utf-8'});
        saveAs(blob, filename);
    }

}