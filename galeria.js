$("#contenedor").hover(function () {
        // over
        $(this).addClass("opaciti");
        $("#text").css("opacity", "1");
    }, function () {
        // out
        $(this).removeClass("opaciti");
        $("#text").css("opacity", "0");
    }
);

$("#contenedor1").hover(function () {
    // over
    $(this).addClass("opaciti");
    $("#text1").css("opacity", "1");
}, function () {
    // out
    $(this).removeClass("opaciti");
    $("#text1").css("opacity", "0");
}
);

$("#contenedor2").hover(function () {
    // over
    $(this).addClass("opaciti");
    $("#text2").css("opacity", "1");
}, function () {
    // out
    $(this).removeClass("opaciti");
    $("#text2").css("opacity", "0");
}
);

$("#contenedor3").hover(function () {
    // over
    $(this).addClass("opaciti");
    $("#text3").css("opacity", "1");
}, function () {
    // out
    $(this).removeClass("opaciti");
    $("#text3").css("opacity", "0");
}
);

$("#contenedor4").hover(function () {
    // over
    $(this).addClass("opaciti");
    $("#text4").css("opacity", "1");
}, function () {
    // out
    $(this).removeClass("opaciti");
    $("#text4").css("opacity", "0");
}
);

$("#contenedor5").hover(function () {
    // over
    $(this).addClass("opaciti");
    $("#text5").css("opacity", "1");
}, function () {
    // out
    $(this).removeClass("opaciti");
    $("#text5").css("opacity", "0");
}
);

$("#contenedor6").hover(function () {
    // over
    $(this).addClass("opaciti");
    $("#text6").css("opacity", "1");
}, function () {
    // out
    $(this).removeClass("opaciti");
    $("#text6").css("opacity", "0");
}
);









$("#imge").click(function (e) { 
    $(this).animate({
        left: '500px',
        opacity: '0.5',
        height: '150px',
        width: '150px'
    });  
});

