$(document).ready(function(){
  $("#menuham").click(function(){
      $("#menuham").hide();
      $("#menubar").toggleClass("hide-mobile");

  });

  $("#exit").click(function(){
      $("#menubar").toggleClass("hide-mobile");
      $("#menuham").show();
  });


  $('.venobox').venobox();


  $(".accordion").on("click", ".accordion-header", function() {
  	$(this).toggleClass("active").next().slideToggle();
  });

});




var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}
