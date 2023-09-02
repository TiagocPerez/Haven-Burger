document.addEventListener('DOMContentLoaded', function() {
    let hamburger = document.querySelector('.hamburger');
    let menuheader = document.querySelector('.menuheader');

    menuheader.classList.add('closed');
  
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      menuheader.classList.toggle('active');
    });
  });
  
  //troca de abas

  const tabBtn = document.querySelectorAll('.tabBtn')
  const conteudoAba = document.querySelectorAll('.conteudoAba')
  
  tabBtn.forEach(button => {
    button.addEventListener('click',()=>{
      

      tabBtn.forEach(bnt => bnt.classList.remove('active'))
      button.classList.add('active')

      const tabId = button.getAttribute('data-tab');

      
      conteudoAba.forEach(content => content.classList.remove('active'))

      document.getElementById(tabId).classList.add('active')
      })
  });
  document.getElementById('tab1').classList.add('active');

  //fade cardapio

  const myObserver = new IntersectionObserver((mostrar)=>{
    mostrar.forEach((entry)=>{
      if(entry.isIntersecting){
        entry.target.classList.add('showCardapio')
      }
    })
  })

  const elementoUp = document.querySelectorAll('.fadeUp');
  elementoUp.forEach((elementos)=>myObserver.observe(elementos))

