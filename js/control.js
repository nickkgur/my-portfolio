// JavaScript Document
var typed = new Typed('.element', {
strings: ["Designer.", "3D Artist.","Chase'emBags-er."],
typeSpeed:30,
backSpeed:30,
loop:true,
});
// time line
$('.timeline-panel').click(function() {
    $('.timeline-body', this).toggle(); // p00f
});

$('.counter').countUp();

AOS.init();