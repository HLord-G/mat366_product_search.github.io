


function history(){
    if (temp_search_history.title_search != "") {
        workdata.search_history.push(
            {
                a_title_search:temp_search_history.title_search,
                b_store_open:[],
                c_date:temp_search_history.date,
            }
        )
    }
}


$("#closehistory").click(function(){
    openclose_history()
})



$("#viewhistory").click(function(){
    openclose_history()
})


function openclose_history(){
    if (temp_search_history.opentoggle == false) {
        $("#history").toggle()
        temp_search_history.opentoggle = true

    }else{
        $("#history").toggle()
        $("#historydisplay").html(null)



for (let index = 0; index < workdata.search_history.length; index++) {

            $("#historydisplay").append(`
            <div class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-sky-400">

                <h3 class="text-xl searchback link text-info font-semibold tracki">
                 ${workdata.search_history[index].a_title_search} 
                </h3>

                <time class="text-xs tracki uppercase dark:text-gray-400"> 
                 ${workdata.search_history[index].c_date} 
                </time>

                <div id="store${index}holder" class="mt-3">
                    
                </div>
            </div>
            `)
 
        }




for (let index = 0; index < workdata.search_history.length; index++) {
    for (let x = 0; x < workdata.search_history[index].b_store_open.length; x++) {
        
        $(`#store${index}holder`).append(`
        <div class="badge badge-info gap-2">
            ${workdata.search_history[index].b_store_open[x]}
        </div>
        `)

    }
}
 

        temp_search_history.opentoggle = false
    }





    $(".searchback").click(function(){
        $("#itemtosearch").val(null)
        $("#itemtosearch").val($(this).text().trim())
        
        setTimeout(() => {
            $("#searchnow").click()
            openclose_history()
        }, 10);
    })
}