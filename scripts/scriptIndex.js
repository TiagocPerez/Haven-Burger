document.addEventListener('DOMContentLoaded', function() {
    var hamburger = document.querySelector('.hamburger');
    var menuheader = document.querySelector('.menuheader');

    menuheader.classList.add('closed');
  
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      menuheader.classList.toggle('active');
    });

  });
  /*mais sobre nos*/
  var maisSobre = document.querySelector('.maisSobreNos')
  var btsobreNos = document.querySelector('.btsobreNos')
  var naveaAuto = document.querySelector('.navegaAutomatico')
  const btnmm = btsobreNos.innerHTML;

    
  function sobreNos(){
    btsobreNos.style.display = 'none'
    maisSobre.classList.toggle('mostraNos')
  }
  function fechaSobreNos(){
    btsobreNos.style.display = 'inline'
    maisSobre.classList.toggle('mostraNos')
    naveaAuto.target.classList.remove('mediaQueryAtivo');
  }


  /*carrocel*/
  var carrocelList = document.querySelector('.carrocelList');
  var nextButton = document.querySelector('.next-button');
  var prevButton = document.querySelector('.prev-button');
  var translateValue = 0;
  
  nextButton.addEventListener('click', function() {
    if (translateValue === -312) {
      translateValue = 0;
    } else {
      translateValue -= 104;
    }
  
    carrocelList.style.transform = `translateX(${translateValue}%)`;
  });
  
  prevButton.addEventListener('click', function() {
    if (translateValue === 0) {
      translateValue = -312;
    } else {
      translateValue += 104;
    }
  
    carrocelList.style.transform = `translateX(${translateValue}%)`;
  });

/*touch*/
var carrocelList = document.querySelector('.carrocelList');
const carrocelItems = document.querySelectorAll('.carrocelItem');
let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;

carrocelList.addEventListener('touchstart', touchStart);
carrocelList.addEventListener('touchmove', touchMove);
carrocelList.addEventListener('touchend', touchEnd);
carrocelList.addEventListener('touchcancel', touchEnd);

function touchStart(event) {
  startPos = event.touches[0].clientX;
  isDragging = true;
  carrocelList.classList.add('dragging');
  cancelAnimationFrame(animationID);
}

function touchMove(event) {
  if (!isDragging) return;
  const currentPosition = event.touches[0].clientX;
  const diff = currentPosition - startPos;
  currentTranslate = prevTranslate + diff;

  const maxTranslate = 0;
  const minTranslate = -carrocelItems[0].offsetWidth * (carrocelItems.length - .85);

  if (currentTranslate > maxTranslate) {
    currentTranslate = maxTranslate;
  } else if (currentTranslate < minTranslate) {
    currentTranslate = minTranslate;
  }

  carrocelList.style.transform = `translateX(${currentTranslate}px)`;
}

function touchEnd() {
  isDragging = false;
  carrocelList.classList.remove('dragging');
  if (currentTranslate - prevTranslate < -50) {
    prevTranslate = currentTranslate;
  } else if (currentTranslate - prevTranslate > 50) {
    prevTranslate = currentTranslate;
  }
  carrocelList.style.transform = `translateX(${prevTranslate}px)`;
}

//slide
let contador = 1;

document.getElementById("radio1").checked
document.getElementById("autoBtn1").style.backgroundColor = 'white'

setInterval(function(){
  let radioCheck = `radio${contador}`
  let btnBGWhite = `autoBtn${contador}`
  let btnBGNone = `autoBtn${contador-1}`
  
  
  
  contador++;

  if(contador > 4){
    contador = 1;
  }
  if(contador != 4){
    document.getElementById('autoBtn4').style.backgroundColor = 'rgba(0, 0, 0, 0)'
  }
  
  document.getElementById(radioCheck).checked = true;
  document.getElementById(btnBGWhite).style.backgroundColor = 'white';
  document.getElementById(btnBGNone).style.backgroundColor = 'rgba(0, 0, 0, 0)';
 
  
}, 3000);


//fade haven burger

const myObserver = new IntersectionObserver((mostrar)=>{
  mostrar.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.classList.add('show')
    }
  })
})


const elementoImg = document.querySelectorAll('.hiddenImg');
const elementosPrg = document.querySelectorAll('.hiddenPrg');
elementoImg.forEach((elementos)=>myObserver.observe(elementos))
elementosPrg.forEach((elementos)=>myObserver.observe(elementos))




