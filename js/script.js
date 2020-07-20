//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/* curator-feed-default-feed-layout */
newFunction();

function newFunction() {
  (function () {
    var i, e, d = document, s = "script"; i = d.createElement("script"); i.async = 1;
    i.src = "https://cdn.curator.io/published/ecf43557-6c9c-4f9d-b55b-a820a043eff0.js";
    e = d.getElementsByTagName(s)[0]; e.parentNode.insertBefore(i, e);
  })();
}
