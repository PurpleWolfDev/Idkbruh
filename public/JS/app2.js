var aaa;
$(document).ready(() => {
// alert(document.querySelector(".images-container").offsetWidth);
    aaa = document.querySelector(".myCard");
    var a = document.querySelector(".img2").offsetLeft;
    // var c = document.querySelector(".img3").offsetLeft;
    console.log(a);
    var b = document.querySelector(".img5").offsetLeft;
    // var bb = document.querySelector(".img3").offsetLeft;
    // bb = bb+30;
    // bb = (bb/screen.width)*100;
    // console.log(b);
    $(".line").css({"width":`${b-a+30}px`});
    // c = c+70;
    // c = (c/screen.width)*100;
    // b = b+70;
    // b = (b/screen.width)*100;
    // $(".three").css({"margin-left": `${c}vw`});
    // $(".one").css({"margin-left": `${0}vw`});
    // $(".five").css({"left":`calc(100% - 30px)`});
    // $(".two").css({"left":`${bb}vw`});

});
function slideNext() {
    var a = document.querySelector(".mobile-container").offsetWidth;
    var b = document.querySelector(".mobile-container").scrollLeft;
    document.querySelector(".mobile-container").scrollLeft = a+b;
}
function slideBack() {
    var a = document.querySelector(".mobile-container").offsetWidth;
    var b = document.querySelector(".mobile-container").scrollLeft;
    console.log(a-b);
    document.querySelector(".mobile-container").scrollLeft = 0;
    document.querySelector(".mobile-container").scrollLeft = b-a;
}