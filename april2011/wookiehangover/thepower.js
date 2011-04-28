$.domReady(function(){

var whale = $('#zombie_whale'),
    octo = $('#hipster_octopus'),
    squiddy = $('#big_squid'),
    clam = $('#drunk_clam'),
    star = $('#star_starfish'),

handler = $._.throttle(function(e) {

  var beta = e.accelerationIncludingGravity ? e.accelerationIncludingGravity.x * 8 : e.beta,
      gamma = e.accelerationIncludingGravity ? e.accelerationIncludingGravity.y * 8: e.gamma,
      x = Math.abs(beta * 8) + 50,
      y = Math.abs(gamma * 12) + 50;


  whale.animate({'left': x + "px", 'top': y +"px" },1);
  octo.animate({'left': (x * 0.03) + "px", 'top': y +"px" },1);
  squiddy.animate({'left': (x * 1.4) + "px", 'top': y +"px" },1);
  clam.animate({'left': (x * 1.1) + "px", 'top': y +"px" },1);
  star.animate({'left': (x * 0.8) + "px", 'top': y +"px" },1);

}, 10);

window.addEventListener("deviceorientation", handler, true);
window.ondevicemotion = handler;

$._.each( [whale, octo, squiddy, clam, star], function(el){
  el.bind('click', function(){
    alert('fuck yo messages');
  });
});


});
