window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 240 || document.documentElement.scrollTop > 240) {
        document.getElementById("up").style.display = "block";
    } else {
        document.getElementById("up").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}