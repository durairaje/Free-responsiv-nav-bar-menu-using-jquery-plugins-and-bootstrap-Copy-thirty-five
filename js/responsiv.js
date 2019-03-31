$(function (){
    $('.nav_bar .nav_bar_item').mouseover(function (){
       $('.nav_bar .nav_bar_item .sub_menu:visible').hide();
       $(this).find('.sub_menu').show();
    });
    
    $('body > header .side_bar_nav .side_bar_icon').click(function (){
        if($(window).width() <= 900){
            $('body > header .search_box').hide();
            $('body > header .nav_bar').hide();
        }
        $('#side_bar').fadeIn("slow");
   });
   
   $('#side_bar > header .close_side_bar img').click(function (){
        $('#side_bar').fadeOut("slow");
   });
   
   isSearchBoxHidden = true;
   $('body > header .mobile_navs .search_icon').click(function (){
       $('body > header .nav_bar').hide();
       $('#side_bar').hide();
      if(isSearchBoxHidden){
          $('body > header .search_box').fadeIn("slow");
          isSearchBoxHidden = false;
      }
        else{
          $('body > header .search_box').fadeOut("slow");
          isSearchBoxHidden = true;
      }
   });
   
   isNavBarHidden = true;
   $('body > header .mobile_navs .nav_bar_icon').click(function (){
      $('#side_bar').hide();
      $('body > header .search_box').hide();
      if(isNavBarHidden){
          $('body > header .nav_bar').fadeIn("slow");
          isNavBarHidden = false;
      }
        else{
          $('body > header .nav_bar').fadeOut("slow");
          isNavBarHidden = true;
      }
   });
});