

let temparrholder = []
function infoviews(idpromt){

    if (temp_infoviews.openclosetoggle == false) {
        $(".tagdisplay").html(null)
        arrtemp = []
        temp_infoviews.timp_datacatiguria = []
        $("#notetags").html(null)
        $("#infoviews").show()
        $("#noteofthisstore").val(null)
        $("body").css({"overflow":"hidden"})
        temp_infoviews.openclosetoggle = true
        temp_infoviews.idholder = idpromt

setTimeout(() => {
    notesoter()
    displaynotes()
    selecttag()
}, 102);
    

    }else{
        $("#infoviews").hide()
        $("body").css({"overflow":"auto"})
        temp_infoviews.openclosetoggle = false
        temp_infoviews.idholder = null
        temp_infoviews.timp_datacatiguria = []
    }
}




$("#closethisinfo").click(function(){
        $("#infoviews").hide()
        $("body").css({"overflow":"auto"})
        temp_infoviews.openclosetoggle = false
        temp_infoviews.timp_datacatiguria = []
})




function displaynotes(){
    for (let index = 0; index < workdata.storedata.length; index++) {
        if (workdata.storedata[index].e_id == temp_infoviews.idholder) {
            $(".titlesote").html(workdata.storedata[index].a_storename)
            $(".counts").html(workdata.storedata[index].f_views)
            $("#noteofthisstore").val(workdata.storedata[index].c_note)
        }
    }
}




function notesoter(){
    $("#noteofthisstore").keydown(function(){
        
        for (let index = 0; index < workdata.storedata.length; index++) {
            
            if (workdata.storedata[index].e_id == temp_infoviews.idholder) {
                workdata.storedata[index].c_note = $(this).val().trim()
            }
            
        }
    })
}



function selecttag(){

    for (let index = 0; index < workdata.storedata.length; index++) {
            
        if (workdata.storedata[index].e_id == temp_infoviews.idholder) {
            if (workdata.storedata[index].d_tags == "" || workdata.storedata[index].d_tags == null) {
                
        $("#notetags").append('<option class="backselect"  selected>Select Your Categories </option>')

        for (let c = 0; c < temp_infoviews.datacatiguria.length; c++) {
            $("#notetags").append(`<option class="tagselectsions"> ${temp_infoviews.datacatiguria[c]} </option>`)
        }   

            }else{
                temparrholder = []
                let tempidholder = 0
                $("#notetags").append('<option class="backselect"  selected>Select Your Categories </option>')
                for (let d = 0; d < workdata.storedata.length; d++) {
                    if (workdata.storedata[d].e_id == temp_infoviews.idholder) {
                        tempidholder = d
                        for (let index = 0; index < workdata.storedata[d].d_tags.length; index++) {
                            $(".tagdisplay").append(`<div class="tagchosen">${workdata.storedata[d].d_tags[index]}</div>`)
                        }
                        tageventdo(tempidholder)
                    }
                }


                let filterItem = temp_infoviews.datacatiguria.filter(item => !workdata.storedata[tempidholder].d_tags.includes(item));


                for (let c = 0; c < filterItem.length; c++) {
                    $("#notetags").append(`<option class="tagselectsions"> ${filterItem[c]} </option>`)
                }   



                //     for (let index = 0; index < $("#notetags .tagselectsions").length; index++) {
                //         for (let g = 0; g < workdata.storedata[tempidholder].d_tags.length; g++) {
                //             if ($("#notetags .tagselectsions").eq(index).text().trim() == workdata.storedata[tempidholder].d_tags[g].trim()) {
                //                 $("#notetags .tagselectsions").eq(index).remove()
                //             }
                //         }
                //     }
                    
          
                       
            }
        }
        
    }





    $("#notetags").change(function(){
        // alert($("#notetags .tagselectsions").length)

        if ($(this).val().trim() == "Select Your Categories") {
            return
        }

        let idnumber = 0
        for (let index = 0; index < workdata.storedata.length; index++) {
            if (workdata.storedata[index].e_id == temp_infoviews.idholder) {
                workdata.storedata[index].d_tags.push($(this).val().trim())
                idnumber = index
            }
        }


        $(".tagdisplay").append(`<div class="tagchosen">${$(this).val().trim()}</div>`)

        for (let index = 0; index < $("#notetags .tagselectsions").length; index++) {
            if ($(this).val().trim() == $("#notetags .tagselectsions").eq(index).text().trim()) {
                $("#notetags .tagselectsions").eq(index).remove()
                break
            }    
        }
        



        tageventdo(idnumber)


        setTimeout(() => {
            document.querySelector(".backselect").selected = true
        }, 150);
    })
}




function tageventdo(ided) {
    $(".tagchosen").click(function(){
        arrtemp = []
        for (let index = 0; index < workdata.storedata[ided].d_tags.length; index++) {
            if (workdata.storedata[ided].d_tags[index].trim() != $(this).text().trim()) {
                arrtemp.push(workdata.storedata[ided].d_tags[index])
            } else{
                $("#notetags").append(`<option class="tagselectsions"> ${workdata.storedata[ided].d_tags[index]} </option>`)
            }
        }
        workdata.storedata[ided].d_tags = arrtemp
        $(this).remove()
    })
}