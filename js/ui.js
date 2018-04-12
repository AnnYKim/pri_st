
//scroll reveal event
$(function(){
  $(window).on("load",function(){

    window.sr = ScrollReveal();

    sr.reveal('.fade-sec1-tit',{
        origin: 'left',
        opacity: 0,
        scale: 1,
        duration: 850,
      }
    );
    sr.reveal('.fade-sec1-desc', {
        delay: 750,
        opacity: 0,
        scale: 1,
        duration: 730,
      },620
    );
    sr.reveal('.fade-sec2-pic', {
        distance: '350px',
        opacity: 0,
        scale: 1,
        duration: 690,
      }
    );
    sr.reveal('.fade-sec2-tit', {
        delay: 620,
        opacity: 0,
        scale: 1,
        duration: 600,
      }
    );
    sr.reveal('.fade-sec2-desc', {
        delay: 1100,
        opacity: 0,
        scale: 1,
        duration: 700,
      }
    );
    sr.reveal('.fade-sec3-text', {
        opacity: 0,
        scale: 1,
        duration: 600,
      }
    );
    sr.reveal('#team', {
        delay: 300,
        distance: '100px',
        opacity: 0,
        scale: 1,
        duration: 600,
      }
    );
    sr.reveal('.fade-sec4-list', {
        opacity: 0,
        scale: 1,
        duration: 690,
        viewFactor: 0.9,
      }, 650
    );

  });
});



/* **************** */



// modal evnet
$(function(){
  
  var $modal = $(".modal");
  var $modalDim = $(".dim");

  function scrollBarWidth() { //스크롤바 구하기
    document.body.style.overflow='hidden';var width=document.body.clientWidth;document.body.style.overflow='scroll';width-=document.body.clientWidth;if(!width)width=document.body.offsetWidth-document.body.clientWidth;document.body.style.overflow='';return width;
  }

  function openPopup() { //모달창 열기
      $modalDim.fadeIn(500,function(){
          $modal.fadeIn();
      });
      $("body").css({"margin-right":scrollBarWidth()}).addClass("noScroll");
      
  }
  function closePopup() { //모달창 닫기
    $modalDim.fadeOut();
    setTimeout(function(){
      $("body").removeAttr("style").removeClass("noScroll");
    },400);
}
          
  $("#pager").on('click',function(evt){
        evt.preventDefault();
        openPopup();
  });

  $(".modal-close").on("click",function(evt){ //닫기 버튼으로 닫기
        evt.preventDefault();
        closePopup();

  });

  $modalDim.on("click",function(){ //dim 눌러 닫기
      if($modal.is(":visible")){
        closePopup();
      }	
  });

  $modal.find(".modal-container").on("click",function(evt){ //버블링 방지
      evt.stopPropagation();
  });

});


/* **************** */



//detect responsive

var breakPoint = [640, 768, 1024, 1200];
    
function isSmallScreen(){
  if ($(window).width() < breakPoint[1]) {
    $("body").addClass('screen-small');
    $('.header').removeClass('sticky').removeAttr('style');
  }else{
    $("body").removeClass('screen-small');
  }
}

function alertMySize(){
  $(".width").text($(window).width());
  if($(window).width()<breakPoint[0]){
    $(".size").text("모바일")
  }
  if($(window).width()>breakPoint[0]){
    $(".size").text("태블릿 (작음)")
  }
  if($(window).width()>breakPoint[1]){
    $(".size").text("태블릿 (큼)")
  }
  if($(window).width()>breakPoint[2]){
    $(".size").text("PC (작음)")
  }
  if($(window).width()>breakPoint[3]){
    $(".size").text("PC (큼)")
  }
}


$(window).on('load',function(){
  isSmallScreen();
  alertMySize();
});


$(window).on('resize',function(){
  //윈도 사이즈가 조절될 때마다 모바일 판단 / section 위치 구함
  isSmallScreen();
  alertMySize();
});



/* **************** */



//header event
$(function(){

  var sectionTop = []; //각 section의 위치
  var headerHeight = 90; //header의 높이 (PC = 80)
  var headerMenuLength = 3; //클릭 시 이동하는 메뉴의 개수
  
  
  function getSectionTop(){ //각 section의 위치 구하는 함수
    $(".section").each(function(idx) {
        sectionTop[idx] = Math.ceil($(this).offset().top);
    });
  }

  function scroll(where){
    $("html,body").stop().animate({
      scrollTop: where
    },800);
  }

  function headerFunc(){ //헤더 링크 클릭 시 해당 섹션으로 이동
    $(".gnb li .nav-menu").on('click',function(e){
      e.preventDefault();
      var idx = $(".gnb li .nav-menu").index($(this));
      var position = (sectionTop[idx+1] - headerHeight);


      if (idx === 4){
        return false;
      }
      
      scroll(position);
      
    });
  }

  function makeHeaderSticky(){
    if ($(window).scrollTop() >= sectionTop[1] - headerHeight ) {
      $('.header').addClass('sticky').css({marginTop: headerHeight});
   }
   else {
      $('.header').removeClass('sticky').removeAttr('style');
   }
  }

  function clickHeaderLogo(){
    $("h1.header-logo").on("click",function(e){
      e.preventDefault();
      scroll(0);
    });
  }

  $(window).on("load",function(){
    getSectionTop();
    headerFunc();
    makeHeaderSticky();
    clickHeaderLogo();

    $(window).on("scroll",function(){
      makeHeaderSticky();
    });

  });


});
