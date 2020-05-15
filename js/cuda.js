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
    
var circle = $('.circle');
    inited = false;

circle.appear({ force_process: true });

circle.on('appear', function() {
  if (!inited) {
    circle.circleProgress({
        startAngle: -Math.PI / 4 * 2,
        thickness: 15,
        size: 160
    });

    $('.circle-blue').circleProgress({ 
        value: 0.90,
        fill: { color: "#30bae7"}
    });
    $('.circle-pink').circleProgress({ 
        value: 0.75,
        fill: { color: "#d74680"} 
    });
    $('.circle-green').circleProgress({
        value: 0.70,
        fill: { color: "#15c7a8"} 
    });
    $('.circle-orange').circleProgress({ 
        value: 0.85,
        fill: { color: "#eb7d4b"}
    });
    inited = true;
  }
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
                    