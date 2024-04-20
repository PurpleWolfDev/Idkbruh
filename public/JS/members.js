function loadBody() {
    setInterval(() => {
        var h = document.querySelector(".ifr1").contentWindow.document.querySelector(".container").offsetHeight;
        var w = document.querySelector(".ifr1").contentWindow.document.querySelector(".container").offsetWidth;
        document.querySelector(".ifr1").setAttribute("style", "height:"+(h+5)+"px;width:"+(w+5)+"px;");
        var h1 = document.querySelector(".ifr2").contentWindow.document.querySelector(".container").offsetHeight;
        var w1 = document.querySelector(".ifr2").contentWindow.document.querySelector(".container").offsetWidth;
        document.querySelector(".ifr2").setAttribute("style", "height:"+(h1+5)+"px;width:"+(w1+5)+"px;");
        var h2 = document.querySelector(".ifr3").contentWindow.document.querySelector(".container").offsetHeight;
        var w2 = document.querySelector(".ifr3").contentWindow.document.querySelector(".container").offsetWidth;
        document.querySelector(".ifr3").setAttribute("style", "height:"+(h2+5)+"px;width:"+(w2+5)+"px;");
        // var h4 = document.querySelector(".ifr4").contentWindow.document.querySelector(".container").offsetHeight;
        // var w4 = document.querySelector(".ifr4").contentWindow.document.querySelector(".container").offsetWidth;
        // document.querySelector(".ifr4").setAttribute("style", "height:"+(h4+5)+"px;width:"+(w4+5)+"px;");
        // var h5 = document.querySelector(".ifr5").contentWindow.document.querySelector(".container").offsetHeight;
        // var w5 = document.querySelector(".ifr5").contentWindow.document.querySelector(".container").offsetWidth;
        // document.querySelector(".ifr5").setAttribute("style", "height:"+(h5+5)+"px;width:"+(w5+5)+"px;");
        // var h6 = document.querySelector(".ifr6").contentWindow.document.querySelector(".container").offsetHeight;
        // var w6 = document.querySelector(".ifr6").contentWindow.document.querySelector(".container").offsetWidth;
        // document.querySelector(".ifr6").setAttribute("style", "height:"+(h6+5)+"px;width:"+(w6+5)+"px;");
        if(h>270) {
            console.log("yes");
            // document.querySelector(".cards-container").setAttribute("style", "opacity:0.5;")
            document.querySelector(".ifr1").setAttribute("style", "");
            document.querySelector(".ifr2").setAttribute("style", "display:none;");
            document.querySelector(".ifr3").setAttribute("style", "");
        }
        else {
            document.querySelector(".cards-container").setAttribute("style", "opacity:1;");
        }
        console.log(h);
    }, 10);
}
