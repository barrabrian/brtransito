$(function() {
    // Input radio-group visual controls
    $('.radio-group label').on('click', function(){
        $(this).removeClass('not-active').siblings().addClass('not-active');
    });
});

$(document).ready(function (){
  $("a.nav-link").on('click', function(e) {

     // prevent default anchor click behavior
     e.preventDefault();

     // store hash
     var hash = this.hash;

     // animate
     $('html, body').animate({
         scrollTop: $(hash).offset().top - 105
       }, 300, function(){

         // when done, add hash to url
         // (default click behaviour)
         window.location.hash = hash;
       });

  });
  // $("a.text-normal").on('click', function(e) {
  //
  //    // prevent default anchor click behavior
  //    e.preventDefault();
  //
  //    // store hash
  //    // var hash = this.hash;
  //
  //    // animate
  //    $("#t_panel1").toggleClass("d-block show");
  //    $("#t_panel2").toggleClass("d-block show");
  // });

  // Suspensao da CNH - DESKTOP
  var activetab = "tab1_D";
  var activepanel = "t_panel1"
  $("#tab1_D").on('click', function(e) {
    e.preventDefault();
    if (activetab !== "tab1_D") {
      $("#t_panel1").addClass("d-block show");
      $("#tab1_D .card").removeClass("bg-gray-lightest");
      $("#"+activepanel).removeClass("d-block show");
      $("#"+activetab+" .card").addClass("bg-gray-lightest");
      activetab = "tab1_D";
      activepanel = "t_panel1";
    }
  });

  $("#tab2_D").on('click', function(e) {
    e.preventDefault();
    if (activetab !== "tab2_D") {
      $("#t_panel2").addClass("d-block show");
      $("#tab2_D .card").removeClass("bg-gray-lightest");
      $("#"+activepanel).removeClass("d-block show");
      $("#"+activetab+" .card").addClass("bg-gray-lightest");
      activetab = "tab2_D";
      activepanel = "t_panel2";
    }
  });

  $("#tab3_D").on('click', function(e) {
    e.preventDefault();
    if (activetab !== "tab3_D") {
      $("#t_panel3").addClass("d-block show");
      $("#tab3_D .card").removeClass("bg-gray-lightest");
      $("#"+activepanel).removeClass("d-block show");
      $("#"+activetab+" .card").addClass("bg-gray-lightest");
      activetab = "tab3_D";
      activepanel = "t_panel3";
    }
  });

  $("#tab4_D").on('click', function(e) {
    e.preventDefault();
    if (activetab !== "tab4_D") {
      $("#t_panel4").addClass("d-block show");
      $("#tab4_D .card").removeClass("bg-gray-lightest");
      $("#"+activepanel).removeClass("d-block show");
      $("#"+activetab+" .card").addClass("bg-gray-lightest");
      activetab = "tab4_D";
      activepanel = "t_panel4";
    }
  });

});
