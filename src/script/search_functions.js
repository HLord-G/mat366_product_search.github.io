$("#searchnow").click(function(){

    if ($("#itemtosearch").val().trim() == "" || $("#itemtosearch").val().trim() == null) {
        return
    }

  const product = convertToLinkAndRemoveSpecialChars($("#itemtosearch").val().trim())
  const googleShoppingLink = `https://www.google.com/search?tbm=shop&q=${product}`
  

  $("#searchitemview").text(`Searching: ${product}`)
  $("#itemtosearch").val(null)
  googleshop(product)
  dataalldisplay(product)

})




function googleshop(googldpromt){
    $("#googleshop").html(`
    <div class="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-5 md:px-24 xl:px-48">
            <h1 class="text-5xl font-bold leadi text-base-content text-center">Google Shopping</h1>
            <!-- <p class="text-xl font-medium text-center">At a assumenda quas cum earum ut itaque commodi saepe rem aspernatur quam natus quis nihil quod, hic explicabo doloribus magnam neque, exercitationem eius sunt!</p> -->
            <div class="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-8">
                <a href="https://www.google.com/search?tbm=shop&q=${googldpromt}" id="searchgoogle" target="_blank" class="px-8 py-3 text-lg font-semibold btn rounded bg-info  text-gray-100">Search Item</a>
            </div>
        </div>
    `)
}




// pag display tanan data once ma click ang search 
function dataalldisplay(tosearch){
        $("#linkdisplay").html(null)
        let togglepree = ""
        for (let index = 1; index < workdata.storedata.length; index++) {


        if (workdata.storedata[index].g_autoopen == true) {
            togglepree = "checked"
        }else{
            togglepree = ""
        }




$("#linkdisplay").append(`
<!-- feature - start -->
        <div class="flex flex-col rounded-lg border p-4 md:p-6">
            <h3 class="mb-2 text-lg font-semibold md:text-xl">
            <a href="${workdata.storedata[index].b_quearysearch}${tosearch}" id="${workdata.storedata[index].e_id}openthis" onclick="adfunct('${workdata.storedata[index].e_id}','${tosearch}')" target="_blank">
                ${workdata.storedata[index].a_storename}
                </a>
            </h3>
            <p class="mb-4 text-gray-500"><small>${tosearch}</small></p>

            <div class="btns_stores">
                <button onclick="infoviews(${workdata.storedata[index].e_id})" class="btn btn-info mt-auto font-bold text-gray-100 transition duration-100 btn-sm mr-2">
                    Info
                </button>

                <a onclick="adfunct('${workdata.storedata[index].e_id}','${tosearch}')" href="${workdata.storedata[index].b_quearysearch}${tosearch}" target="_blank" class="mt-auto font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">
                    View Store
                </a>   
                <input type="checkbox"  id="${workdata.storedata[index].e_id}toggles" toggleid="${workdata.storedata[index].e_id}" class="toggle toggletandog toggle-info  toggle-xs" ${togglepree} />
                    |  <small><small>Views <span id="${workdata.storedata[index].e_id}clicked">0</span></small></small>
            </div>
        </div>
<!-- feature - end -->
`)

}
 

        let links = [];
        let uniqueLinks = [];
        for (let o = 1; o < workdata.storedata.length; o++) {
            if (workdata.storedata[o].g_autoopen == true) {
                links.push(`${workdata.storedata[o].b_quearysearch}${tosearch}`)
                $(`#${workdata.storedata[o].e_id}openthis`).click()
            }
        }
        
        uniqueLinks = [...new Set(links)];
        uniqueLinks.forEach(link => {
         window.open(link, '_blank');
        });

        setTimeout(() => {
            window.open(`${workdata.storedata[0].b_quearysearch}${tosearch}`, '_blank');
        }, 100);


        togglefunct()
    }