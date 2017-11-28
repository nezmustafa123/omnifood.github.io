$(document).ready(function() {
    
    /* for the sticky navigation */
    $('.js--section-features').waypoints(function(direction) {
        
    //        direction means if the user is scrolling down or up 
     
        if(direction === "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass("sticky");
        }
        
    }, {
        offset: '60px;' 
//        60pixels before the section defined
    });
    
    
//    Scroll on buttons give class to buttons
    $('.js--scroll-to-plans').click(function (){
        
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
//        select html and body
    });
    
    $('.js--scroll-to-start').click(function (){
        
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
//        select html and body
    });
    
//    Navigation scroll
    
  $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({ //select html and body
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });

    
    
//    Animation on scroll
   $('.js--wp-1').waypoint(function(direction){
    $(.'js--wp-1').addClass('animated fadeIn');
    },{
     offset: '50%'                
  });

    
    
    $('.js--wp-2').waypoint(function(direction){
    $(.'js--wp-2').addClass('animated fadeInup');
    },{
     offset: '50%'                
  });

    
    $('.js--wp-3').waypoint(function(direction){
    $(.'js--wp-3').addClass('animated fadeIn');
    },{
     offset: '50%'                
  });

    
    $('.js--wp-4').waypoint(function(direction){
    $(.'js--wp-4').addClass('animated fadeIn');
    },{
     offset: '50%'                
  });

         
//    Mobile  nav
    
    $('.js--nav-icon').click(function() {
        var nav =  $('.js--main--nav');
        var icon = $('js--nav--icon i'); 
        //class and element
        
        nav.slideToggle(200);//open and close a box
        
        
        if (icon.hasClass(''))
        
        
        
        
        
    });
    
    
    
});
    
    













    
    
//    $("h1").click(function() {
//        //select h1 element click h1 = this change background color
//        
//        $(this).css("background-color", "#ff0000;")
//        
//        
//    })
//    
//    
//    use jquery to add a class to the nav every time we leave the header
//    
    
    
/*var waypoints = $('#handler-first').waypoint(function(direction) {
  notify(this.element.id + ' hit 25% from top of window') 
}, {
  offset: '25%'
})
*/
    
    
    
    
    
    
    
    
    
    
