var main = function() {

  var menu_mouseleave_enabled = true;

  // $("#name")
  //   .mouseenter(function(){
  //     if(menu_mouseleave_enabled){
  //       $(".browse").fadeIn({queue: false, duration: 200});
  //       $(".browse").animate({left: '375'}, 300);
  //     }
  //     $(".rgb").css("display","inline");
  //     $("#name").css("opacity","0.0");
  //   })
  //   .mouseleave(function(){
  //     if(menu_mouseleave_enabled){
  //       if($(".browse").css("opacity") == 1){
  //         $(".browse").fadeOut({queue: false, duration: 200});
  //         $(".browse").animate({left: '300'}, 400);
  //       }
  //     }
  //     $(".rgb").css("display","none");
  //     $("#name").css("opacity","1");
  //   });

  $("#music")
    .mouseenter(function(){
      $(".rgb2").css("opacity","0.75");
      $("#music").css("opacity","0.0");
      $(".music_description").css("opacity","0.5");
      // $(".music_description").css("display","inline");
    })
    .mouseleave(function(){
      $(".rgb2").css("opacity","0.0");
      $("#music").css("opacity","1");
      $(".music_description").css("opacity","0.0");
    });

  $("#blog")
    .mouseenter(function(){
      $(".rgb3").css("opacity","0.75");
      $("#blog").css("opacity","0.0");
      $(".tumblr_description").css("opacity","0.5");

    })
    .mouseleave(function(){
      $(".rgb3").css("opacity","0.0");
      $("#blog").css("opacity","1");
      $(".tumblr_description").css("opacity","0.0");
    });

  $("#res")
    .mouseenter(function(){
      $(".rgb1").css("opacity","0.75");
      $("#res").css("opacity","0.0");
      $(".res_description").css("opacity","0.5");

    })
    .mouseleave(function(){
      $(".rgb1").css("opacity","0.0");
      $("#res").css("opacity","1");
      $(".res_description").css("opacity","0.0");
    });

  $("#hack")
    .mouseenter(function(){
      $(".rgb4").css("opacity","0.75");
      $("#hack").css("opacity","0.0");
      $(".hacker_description").css("opacity","0.5");

    })
    .mouseleave(function(){
      $(".rgb4").css("opacity","0.0");
      $("#hack").css("opacity","1");
      $(".hacker_description").css("opacity","0.0");
    });

  // $("span").click(function(){
  //   if(menu_mouseleave_enabled){
  //     if($(".browse").not(":visible")){
  //       $(".browse").fadeIn({queue: false, duration: 200});
  //       $(".browse").animate({left: '375'}, 300);
  //     }
  //     menu_mouseleave_enabled = false;
  //   }else{
  //     $(".browse").fadeOut({queue: false, duration: 200});
  //     $(".browse").animate({left: '300'}, 400);
  //     menu_mouseleave_enabled = true;
  //   }
  // });

};

$(document).ready(main);