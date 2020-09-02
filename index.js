function onClick(element, showLink = false) {

    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    var linkText = document.getElementById("linkText");
    captionText.innerHTML = element.alt;
    var link = "https://www.behance.net/armanquino";
    if(showLink == true){
        linkText.innerHTML = "<a href='"+ link +"' target='_blank'>Behance</a>";
    }else{
        linkText.innerHTML = "";
    }
  }
  
  // Change style of navbar on scroll
  window.onscroll = function() {myFunction()};
  function myFunction() {
      var navbar = document.getElementById("myNavbar");
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          navbar.className = "w3-bar" + " w3-card";
      } else {
          navbar.className = navbar.className.replace(" w3-card", " ");
      }
  }
  
  // Used to toggle the menu on small screens when clicking on the menu button
  function toggleFunction() {
      var x = document.getElementById("navDemo");
      if (x.className.indexOf("w3-show") == -1) {
          x.className += " w3-show";
      } else {
          x.className = x.className.replace(" w3-show", "");
      }
  }