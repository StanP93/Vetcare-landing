window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 240 || document.documentElement.scrollTop > 240) {
        document.getElementById("up").style.display = "block";
    } else {
        document.getElementById("up").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}