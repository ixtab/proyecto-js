window.onload = function() {

    // TODO Slider hecho por mi.

    $('#galeria').bxSlider({ // plugin: bxslider.com
        mode: "fade",
        speed: 1000,
        randomStart: true,
        captions: true,
        auto: true,
        pause: 1000,
        pager: false,
        controls: false
    });
}