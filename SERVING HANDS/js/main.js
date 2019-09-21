(function(){

  let navToggler = document.querySelector('.navbar-toggler');
  let navbarCollapse = document.querySelector('.navbar-collapse');
  let navbar = document.querySelector('.navbar');


  function showNavbar() {
    navbarCollapse.classList.toggle('show')
  }

  navToggler.addEventListener('click', showNavbar)

  window.addEventListener('scroll', function(){
    let navbarOffset = navbar.offsetTop;
    if(window.pageYOffset > navbarOffset){
      navbar.classList.add('fixed');
    } else {
      navbar.classList.remove('fixed');
    }
  })

})()