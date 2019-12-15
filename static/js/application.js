$(document).ready(function(){
    $('.navbar').fadeIn(1500);
    $(".profile").delay(250).fadeIn(1500);
    $(".about-me").delay(500).fadeIn(1500);
    $(".projects").delay(750).fadeIn(1500);
    $(".footer").delay(1000).fadeIn(1500);
});

$(document).ready(function(){
  height = $(window).height();
  $(".details-btn").click(function(){
    position = $(window).scrollTop();
    var child = $(this).parent().children(".project-text");
    child.slideDown();
    var pos = height + position;
    var div = child.position().top + 320;
    if(pos < div){
        $("html, body").animate({ scrollTop: $(window).scrollTop() + (div - pos)}, "slow");
    }
    $(this).hide();
  });
});
