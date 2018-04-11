$(function(){
  window.sr = ScrollReveal();

  sr.reveal('.fade-sec1-tit',{
                origin: 'left',
                opacity: 0,
                scale: 1,
                duration: 850,
                //reset: true,
              }
            );
  sr.reveal('.fade-sec1-desc', {
                delay: 750,
                opacity: 0,
                scale: 1,
                duration: 730,
                //reset: true,
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


  // var goalNum = [];

  // function generateRandom(max){
  //   return Math.floor(Math.random()*max);
  // }

  // function generateGoalNumber(){
  //   for(var i=0; i<8; i++){
  //     goalNum[i] = generateRandom(8);

  //     for (var j = 0; j<i; j++) {
  //       if(goalNum[i] == goalNum[j]){
  //         i = i - 1; 
  //         break;
  //       }
  //     }
  //   }
  // }

  // generateGoalNumber();
  //console.log(goalNum);
  
  // for (var i=0; i<=7; i++){
  //   sr.reveal('.fade-sec3-num'+goalNum[i], {
  //       distance: '120px',
  //       opacity: 0,
  //       scale: 1,
  //       //container: '#team',
  //       //viewFactor: 0.9,
  //       viewport: document.getElementById('team'),
  //       viewFactor: 0.1,
  //       duration: 600,
  //       delay: (i*300),
  //       useDelay: 'once',
  //       easing: 'cubic-bezier(0.23, 1, 0.32, 1)',
  //     }
  //   );
  // }


});


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
    $("body").removeAttr("style").removeClass("noScroll");
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