

$("#mode").click(function(){
    if ($("html").attr("data-theme") == "light") {
        $("html").attr("data-theme","dark")
        $(this).html("<a>Light Mode</a>")
    }else{
        $("html").attr("data-theme","light")
        
        $(this).html("<a>Dark Mode</a>")
    }
})