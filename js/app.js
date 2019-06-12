$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-still').show();
  })
  .mousedown(function() {
 
  playHadouken();
  $('.ryu-ready').hide();
  $('.ryu-throwing').show();
  $('.hadouken').finish().show()
  .animate(
    {'left': '1020px'},
    500,
    function() {
      $('.hadouken').hide();
      $('.hadouken').css('left', '520px');
    }
  );
})
  .mouseup(function() {
 
    $('.ryu-ready').show();
	$('.ryu-throwing').hide();
	
    // ryu goes back to his ready position
  });
});
$(document).keydown(function(event) { 
  if(event.which==88){
  	$('.ryu-ready').hide();
  	$('.ryu-throwing').hide();
  	$('.ryu-still').hide();
  	$('.ryu-cool').show();
  } 
})
.keyup(function(event) {
	if(event.which==88){
  	$('.ryu-still').show();
  	$('.ryu-cool').hide();
  } 
});
; 


function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}
