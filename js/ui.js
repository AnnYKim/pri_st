
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


function preventScroll(){
  $("body").css({"margin-right":scrollBarWidth()}).addClass("noScroll");
}
function allowScroll(){
  $("body").removeAttr("style").removeClass("noScroll");
}

function scrollBarWidth() { //스크롤바 구하기
  document.body.style.overflow='hidden';var width=document.body.clientWidth;document.body.style.overflow='scroll';width-=document.body.clientWidth;if(!width)width=document.body.offsetWidth-document.body.clientWidth;document.body.style.overflow='';return width;
}



// modal evnet
$(function(){
  
  var $modal = $(".modal");
  var $modalDim = $(".dim");

  function openPopup() { //모달창 열기
      $modalDim.fadeIn(500,function(){
          $modal.fadeIn();
      });
      preventScroll();
      
  }
  function closePopup() { //모달창 닫기
    $modalDim.fadeOut();
    setTimeout(function(){
      allowScroll();
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



//detect responsive ---- 삭제 예정!

  var breakPoint = [640, 768, 1024, 1200];

  //모바일 판단
  function isSmallScreen(){
    if ($(window).width() < breakPoint[2]) {
      $("body").addClass('screen-small');
      $('.header').removeClass('sticky').removeAttr('style');
    }else{
      $("body").removeClass('screen-small');
      if($('.header').hasClass("opened")){
        $('.header').removeClass("opened");
      }
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
  alertMySize();
});




/* **************** */



//header event
$(function(){

  //전역변수

  var sectionTop = []; //각 section의 위치
  var headerHeight = 90; //header의 높이 (PC = 90, mobile = 60)
  var headerMenuLength = 3; //클릭 시 이동하는 메뉴의 개수

  var $body = $("html,body");
  var $header = $(".header");
  var $burger = $header.find(".hamburger");
  var $navMenu = $(".gnb li .nav-menu");
      

  //각 section의 위치 구하는 함수
  function getSectionTop(){
    $(".section").each(function(idx) {
        sectionTop[idx] = Math.ceil($(this).offset().top);
    });
  }

  //스크롤 함수
  function scroll(where){ 
    $body.stop().animate({
      scrollTop: where
    },800);
  }

  //헤더 링크 클릭 시 해당 섹션으로 이동
  function headerFunc(){ 
    $navMenu.on('click',function(e){
      e.preventDefault();

      $("body").hasClass("screen-small") ? headerHeight = 60 : headerHeight = 90;

      var idx = $navMenu.index($(this));
      var position = (sectionTop[idx+1] - headerHeight);


      if (idx === 4){
        return false; //one pager 모달용
      }

      scroll(position);

      if ($header.hasClass("opened")){
        closeBurgerMenu();
      }
    });
  }

  //1섹션 이상 스크롤 시 헤더 고정
  function makeHeaderSticky(){
   

    if(!$("body").hasClass("screen-small")){

      $("body").hasClass("screen-small") ? headerHeight = 60 : headerHeight = 90;

      if ($(window).scrollTop() >= sectionTop[1] - headerHeight ) {
        $header.addClass('sticky').css({marginTop: headerHeight});
      }else {
        $header.removeClass('sticky').removeAttr('style');
      }
   }

  }

  //로고 클릭 시 맨 위로 이동
  function clickHeaderLogo(){
    $("h1.header-logo").on("click",function(e){
      e.preventDefault();
      scroll(0);
    });
  }

  //버거 메뉴 오픈
  function openBurgerMenu(){
    $header.addClass("opened");
    preventScroll();
  }

        
  //버거 메뉴 클로즈
  function closeBurgerMenu(){
    $header.removeClass("opened");
    allowScroll();
  }


  function initEvent(){

    //모바일 크기 판단
    isSmallScreen();

    //섹션위치 구함
    getSectionTop();

    //헤더 메뉴 클릭 시 이동
    headerFunc();

    //헤더영역 고정
    makeHeaderSticky();

    //로고 클릭 시 맨 위로
    clickHeaderLogo();

    
    //버거 토글
    $burger.on('click',function(e){
      e.preventDefault();
      $header.hasClass('opened') ? closeBurgerMenu() : openBurgerMenu();
    });



    $(window).on("scroll",function(){
      makeHeaderSticky();
    });

    $(window).on('resize',function(){
      isSmallScreen();
      getSectionTop();
      alertMySize();
    });


  }



  $(window).on("load",function(){

    initEvent();
    //$(".loading").hide();
    

  });


});


