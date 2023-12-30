// Trigger file input click when the button is clicked
$('#importButton').click(function() {
    $('#jsonFileInput').click(); // Simulate a click on the hidden file input
  });

  // Handle file selection
  $('#jsonFileInput').change(function() {
    let file = this.files[0];

    if (file) {
      let reader = new FileReader();

      reader.onload = function(e) {
        try {
          // Parse the JSON data and update myData
          workdata = JSON.parse(e.target.result);

          // Now you can use the updated myData object as needed
          // console.log(myData);
 


          //*[S] DATA IMPORTS RUNNER
        //   setTimeout(() => {
        //     goal_Startter()
        //     note_starter()
        //     displaying_data_hnv()
            
        //   }, 123);
          //*![E] DATA IMPORTS RUNNER



          return
          // You might want to call other functions or update your UI here based on the new data
        } catch (error) {
          console.error('Error parsing JSON:', error);
        } finally {
          // Reset the value of the file input to allow importing a new file
          $('#jsonFileInput').val('');
        }
      };

      reader.readAsText(file);
    }
  });