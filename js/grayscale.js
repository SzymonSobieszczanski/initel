(function($) {
  "use strict"; // Start of use strict






  $("#go-down").click(function(){
  
    $('html, body').animate({
      scrollTop: $("#projects").offset().top
    }, 1000);
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
      $("#mainNav").removeClass("navbarDefault");     
    
    } else {
      $("#mainNav").removeClass("navbar-shrink");
      $("#mainNav").addClass("navbarDefault");
   
    }
  };
  // Collapse now if page is not at top
  //navbarCollapse();
  // Collapse the navbar when page is scrolled
 //$(window).scroll(navbarCollapse);

})(jQuery); // End of use strict
