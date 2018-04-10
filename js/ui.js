$(function(){
  window.sr = ScrollReveal();

  sr.reveal('.fade-sec1-tit',{
                origin: 'left',
                opacity: 0,
                scale: 1,
                duration: 900,
              }
            );
  sr.reveal('.fade-sec1-desc', {
                delay: 950,
                opacity: 0,
                scale: 1,
                duration: 720,
              },450
            );
  sr.reveal('.fade-sec2-pic', {
                distance: '350px',
                opacity: 0,
                scale: 1,
                duration: 700,
              }
            );
  sr.reveal('.fade-sec2-tit', {
                delay: 660,
                opacity: 0,
                scale: 1,
                duration: 700,
              }
            );
  sr.reveal('.fade-sec2-desc', {
                delay: 1320,
                opacity: 0,
                scale: 1,
                duration: 700,
              }
            );
  sr.reveal('.fade-sec3-list', {
              distance: '120px',
              opacity: 0,
              scale: 1,
              duration: 720,
            }
          );


  /*** randomly show ***/
  var goalNum = [];

  //난수 생성
  function generateRandom(max){
    return Math.floor(Math.random()*max);
  }

  //연속적인 난수 생성
  function generateGoalNumber(){
    for(var i=0; i<8; i++){
      goalNum[i] = generateRandom(8);
      
      //겹치는 숫자 제거
      for (var j = 0; j<i; j++) {
        if(goalNum[i] == goalNum[j]){
          i = i - 1; 
          break;
        }
      }
    }
  }

  generateGoalNumber();
  //console.log(goalNum);
  
  for (var i=0; i<=7; i++){
    sr.reveal('.fade-sec3-num'+goalNum[i], {
        distance: '120px',
        opacity: 0,
        scale: 1,
        //container: '#team',
        //viewFactor: 0.9,
        viewport: document.getElementById('team'),
        duration: 630,
        delay: (i*200),
        easing: 'cubic-bezier(0.77, 0, 0.175, 1)',
      }
    );
  }

  
  sr.reveal('.fade-sec4-list', {
      opacity: 0,
      scale: 1,
      duration: 720,
      viewFactor: 0.9,
    }, 780
  );



});