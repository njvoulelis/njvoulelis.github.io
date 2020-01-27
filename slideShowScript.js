$(function () {

    $("#slideshow > div:gt(0)").hide();

    setInterval(function () {
        $('#slideshow > div:first')
            .fadeOut(2500)
            .next()
            .fadeIn(1750)
            .end()
            .appendTo('#slideshow');
    }, 7000);

});