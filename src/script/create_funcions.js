$("#getlinkandcreate").click(function(){

 
    for (let index = 0; index < workdata.storedata.length; index++) {
         
        if (workdata.storedata[index].a_storename.toLowerCase() == title_link($("#storequerylink").val()).toLowerCase().trim()) {
                $("#dataerror").show()

            setTimeout(() => {
                $("#dataerror").hide()
            }, 2000);
            return
        }
    }


    
        workdata.storedata.push({
            a_storename:`${title_link($("#storequerylink").val())}`,
            b_quearysearch:`${$("#storequerylink").val()}`,
            c_note:"",
            d_tags:[],
            e_id:`${randomid()}${title_link($("#storequerylink").val())}`,
            f_views:0,
            g_autoopen:false
        })
    
        $("#createstore").click() 
        $("#storequerylink").val(null)



})




function randomid(){
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomId = '';
    
    for (let i = 0; i < 8; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomId += characters.charAt(randomIndex);
    }
    
    return randomId;
}




function convertToLinkAndRemoveSpecialChars(text) {
    // Remove special characters
    const cleanedText = text.replace(/[^\w\s]/gi, '').trim();

    // Convert to a link
    const linkText = cleanedText.toLowerCase().replace(/\s/g, ' ');

    return linkText;
    }





function title_link(promts){
    const url = promts;
    const regex = /\.(.*?)\./;
    const match = url.match(regex);

    if (match) {
        const centerText = match[1];
        return centerText
    } else {
        // document.body.innerHTML = "<p>No match found.</p>";
    }
}