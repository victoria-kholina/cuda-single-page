jQuery(document).ready(function(){
    
function getMenu(){
    var winWidth = $(window).width();
     if(winWidth<='768'){ 
        $('.menu button').removeClass("hidden").addClass("show");
        $('.menu').addClass("dropdown btn-group");
        $('.menu ul').addClass("dropdown-menu");
    } else { 
        $('.menu button').removeClass("show").addClass("hidden");
        $('.menu').removeClass("dropdown");
        $('.menu ul').removeClass("dropdown-menu");     
    };
    };
$(window).load(getMenu);     
$(window).resize(getMenu); 
        
});//end jQuery
                    