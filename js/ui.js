$(function(){

  var $item = $(".item-fade");

  function getOffsetVal(elem){
    var itemOffset = (window.scrollY >= ( elem.offsetTop - window.innerHeight + 300 ) ) && (window.scrollY <= (elem.offsetTop + elem.offsetHeight - 250) );	
		return itemOffset;
  }

	$item.each(function(e) {
    console.log("아이템 발견 !!!!")



		if(getOffsetVal($(this))){
      $(this).addClass("HELLO");
    }
	});
  
});


$(function(){

  var scrollY = window.scrollY;
  var scrollTop = $(window).scrollTop(); 
  console.log("scrollY=", scrollY);
  console.log("scrollTop=", scrollTop);

});


$(function(){

var rafId = null;
var delay = 200;
var lTime = 0;

function scroll() {
  var scrollTop = $(window).scrollTop(); 
  var height = $(window).height()
  var visibleTop = scrollTop + height;
  $('.reveal').each(function() {
    var $t = $(this);
    if ($t.hasClass('reveal_visible')) { return; }
    var top = $t.offset().top;
    if (top <= visibleTop) {
      if (top + $t.height() < scrollTop) {
        $t.removeClass('reveal_pending').addClass('reveal_visible');
      } else {
        $t.addClass('reveal_pending');
        if (!rafId) requestAnimationFrame(reveal);  
      }
    }
  });
}
function reveal() {
  rafId = null;
  var now = performance.now();
  
  if (now - lTime > delay) {
    lTime = now;
    var $ts = $('.reveal_pending');
    $($ts.get(0)).removeClass('reveal_pending').addClass('reveal_visible');  
  }
  
  
  if ($('.reveal_pending').length >= 1) rafId = requestAnimationFrame(reveal);
}

$(scroll);
$(window).scroll(scroll);
$(window).click(function() {
  $('.reveal').removeClass('reveal_visible').removeClass('reveal_pending');
  lTime = performance.now() + 500;
  var top = $(window).scrollTop();
  $(window).scrollTop(top === 0 ? 1 : top-1);
});

});



// var $item =	$('.item-fade'),
// $item_link = $('.item-link');
// function offsetValue(i){
// var item_offset = (window.scrollY >= ( i.offsetTop - window.innerHeight + 300 ) ) && (window.scrollY <= (i.offsetTop + i.offsetHeight - 250) );	
// return item_offset;
// };
// $item_link.forEach(function(link){
// link.addEventListener('click',function(evt){
//   evt.preventDefault();
//   var scroll_position = $(this.getAttribute('href')).offsetTop - 100;
//   window.scroll(0,scroll_position);
// })	
// });
// $item.forEach(function(e) {
// var item_id = e.getAttribute('id');
// if(offsetValue(e)){
//   e.classList.add('act');
//   $('a[href*=' + item_id + ']').classList.add('act');
// }else{
//   $('a[href*=' + item_id + ']').classList.remove('act');
// }
// });