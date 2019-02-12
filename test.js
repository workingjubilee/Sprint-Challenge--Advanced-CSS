  $(document).ready(function(){
    // This anticipates the document.
   $(window).scroll(function(){
     // Every time the window is scrolled...
       $("#fading").css("opacity", 0.9 - $(window).scrollTop() / 10);
   });
});
