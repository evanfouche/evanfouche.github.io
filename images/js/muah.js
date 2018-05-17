function hideReport(){
  $(".mind_prompt").css("display","none");
  $(".report, .rgb6").css("display","none");
}
function hideASMR(){
  $(".asmr_desc").css("display","none");
  $(".YT_link, .rgb9").css("display","none");
}

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

  // var 
  // $(".rgb6").css

  

  $("#music")
    .mouseenter(function(){
      $(".rgb2").css("opacity","0.75");
      $("#music").css("opacity","0.0");
      $(".music_description").css("opacity","0.5");
      hideReport();
      hideASMR();
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
      hideReport();
      hideASMR();
      
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
      hideReport();
      hideASMR();
      
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
      hideReport();
      hideASMR();
      
    })
    .mouseleave(function(){
      $(".rgb4").css("opacity","0.0");
      $("#hack").css("opacity","1");
      $(".hacker_description").css("opacity","0.0");
    });

  $("#mind")
    .mouseenter(function(){
      $(".rgb5").css("opacity","0.75");
      $("#mind").css("opacity","0.0");
      $(".mind_description").css("opacity","0.5");
      hideASMR();

    })
    .mouseleave(function(){
      $(".rgb5").css("opacity","0.0");
      $("#mind").css("opacity","1");
      $(".mind_description").css("opacity","0.0");
    })
    .click(function(){
      $(".mind_prompt").css("display","inline-block");
      $(".report, .rgb6").css("display","inline-block");
      $(".mind_description").css("opacity","0.0");
      // $("#mind").css("opacity","1");
      // $(".mind_description").css("opacity","0.0");
    });

  $("#art")
    .mouseenter(function(){
      $(".rgb7").css("opacity","0.75");
      $("#art").css("opacity","0.0");
      $(".insta_description").css("opacity","0.5");
      hideReport();
      hideASMR();

    })
    .mouseleave(function(){
      $(".rgb7").css("opacity","0.0");
      $("#art").css("opacity","1");
      $(".insta_description").css("opacity","0.0");
    });

  $("#asmr")
    .mouseenter(function(){
      $(".rgb8").css("opacity","0.75");
      $("#asmr").css("opacity","0.0");
      $(".YT_description").css("opacity","0.5");
      hideReport();

    })
    .mouseleave(function(){
      $(".rgb8").css("opacity","0.0");
      $("#asmr").css("opacity","1");
      $(".YT_description").css("opacity","0.0");
    })
    .click(function(){
      $(".asmr_desc").css("display","inline-block");
      $(".YT_link, .rgb9").css("display","inline-block");
      $(".YT_description").css("opacity","0.0");
      // $("#mind").css("opacity","1");
      // $(".mind_description").css("opacity","0.0");
    });

  $("#report")
    .mouseenter(function(){
      $(".rgb6").css("opacity","0.75");
      $("#report").css("opacity","0.0");
      // $(".mind_description").css("opacity","0.5");

    })
    .mouseleave(function(){
      $(".rgb6").css("opacity","0.0");
      $("#report").css("opacity","1");
      // $(".mind_description").css("opacity","0.0");
    });

  $("#asmr_link")
    .mouseenter(function(){
      $(".rgb9").css("opacity","0.75");
      $("#asmr_link").css("opacity","0.0");
      // $(".mind_description").css("opacity","0.5");

    })
    .mouseleave(function(){
      $(".rgb9").css("opacity","0.0");
      $("#asmr_link").css("opacity","1");
      // $(".mind_description").css("opacity","0.0");
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