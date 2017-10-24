jQuery(document).ready(function(){
    
$(window).resize(getMenu); 
    getMenu();  
    
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
    
var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 65,
    startDelay: 500,
    fadeOut: true,
    fadeOutDelay: 1000,
	contentType: "html"
    //onComplete: function(){ $('.typed-cursor').css('display','none'); }
  });

$('form').each(function() { 
    $(this).validate({
    rules: {
        name:"required",
        mail: {
        required: true,
        email: true
      }
    },
    messages: {
      name: "Please enter your firstname",
      mail: "Please enter a valid email address"
    },
    submitHandler: function(form) {
      form.submit();
        alert("ok");
    }
});
});

    
});//end jQuery
                    
                    