var main = function() {

  var menu_mouseleave_enabled = true;

  $("#name")
    .mouseenter(function(){
      if(menu_mouseleave_enabled){
        $(".browse").fadeIn({queue: false, duration: 200});
        $(".browse").animate({left: '375'}, 300);
      }
      $(".rgb").css("display","inline");
      $("#name").css("opacity","0.0");
    })
    .mouseleave(function(){
      if(menu_mouseleave_enabled){
        if($(".browse").css("opacity") == 1){
          $(".browse").fadeOut({queue: false, duration: 200});
          $(".browse").animate({left: '300'}, 400);
        }
      }
      $(".rgb").css("display","none");
      $("#name").css("opacity","1");
    });

  $("#music")
    .mouseenter(function(){
      $(".rgb2").css("display","inline");
      $("#music").css("opacity","0.0");
    })
    .mouseleave(function(){
      $(".rgb2").css("display","none");
      $("#music").css("opacity","1");
    });

  $("span").click(function(){
    if(menu_mouseleave_enabled){
      if($(".browse").not(":visible")){
        $(".browse").fadeIn({queue: false, duration: 200});
        $(".browse").animate({left: '375'}, 300);
      }
      menu_mouseleave_enabled = false;
    }else{
      $(".browse").fadeOut({queue: false, duration: 200});
      $(".browse").animate({left: '300'}, 400);
      menu_mouseleave_enabled = true;
    }
  });

};

$(document).ready(main);