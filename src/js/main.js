$(document).ready(function(){
  $('.advantages-slider').slick({
    infinite: true,
    dots: true,
    autoplay: true,
    speed: 500
  });
  $('.customers-slider').slick({
    infinite: true,
    dots: false,
    // autoplay: true,
    speed: 500
  });
  $("._to-form").on("click", function(e) {
    var formPos = $(".form").offset().top;
    e.preventDefault();
    $("html, body").animate({ scrollTop: formPos }, 600);
  });
});

window.onload = function(){
  initializeClock('timer', deadline);
};
