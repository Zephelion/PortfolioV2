console.log("wagwan people");

var lastScrollTop = 0;

window.addEventListener('scroll', function(){

    var currentScroll = window.scrollY;

    if (currentScroll > lastScrollTop){
        console.log("nu moet de nav naar boven gaan")
    } else{
        console.log("nu gaat de nav naar beneden")
    }

    lastScrollTop = currentScroll;
});