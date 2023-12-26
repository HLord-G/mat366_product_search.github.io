$("#savedata").click(async function(){
 
    alert("Sdfsef")
  
    try {
      const fileHandle = await window.showSaveFilePicker({
        suggestedName: 'filename.json',
        types: [
          {
            accept: {
              'application/json': ['.json'],
            },
          },
        ],
      });
      const writable = await fileHandle.createWritable();
  
      d = new Date();
      options = { timeZone: 'Asia/Manila' };
      philippinesTime = d.toLocaleString('en-US', options);
  
      date = d.getDate();
      months = d.getMonth() + 1;
      years = d.getFullYear();
     
      hours = d.getHours();
      mints = d.getMinutes();
      sec = d.getSeconds();
  
      // Convert the object to a JSON string
      let jsonString = JSON.stringify(workdata);
      
      // Write the JSON string to the file
      await writable.write(jsonString);
      
      // Close the file
      await writable.close();
  
 
      console.log('Data saved successfully as filename.json!');
    } catch (error) {
      console.error('Error saving data:', error);
    }
  });
  