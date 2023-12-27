


function infoviews(idpromt){

    if (temp_infoviews.openclosetoggle == false) {
        $("#infoviews").show()

        temp_infoviews.openclosetoggle = true
    }else{
        $("#infoviews").hide()

        temp_infoviews.openclosetoggle = false
    }
}