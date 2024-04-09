// toggle icon navbar
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

/*menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('bx-x'); // Vaihtaa navbarin luokkaa klikkauksen yhteydessä
  menuIcon.classList.toggle('active'); // Vaihtaa menu-ikonin luokkaa klikkauksen yhteydessä
})*/

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('show'); // Vaihtaa navbarin luokkaa klikkauksen yhteydessä
  menuIcon.classList.toggle('active'); // Vaihtaa menu-ikonin luokkaa klikkauksen yhteydessä
})


// scroll sections
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links => {
        links.classList.remove('active'); // Poistaa aktiivisen luokan kaikista linkeistä
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active'); // Lisää aktiivisen luokan linkkiin, joka vastaa nykyistä osiota
      })
    }
  })

  // sticky header
  const header = document.querySelector('header')
  header.classList.toggle('sticky', window.scrollY > 100); // Lisää tai poistaa sticky-luokan headerista riippuen vierityksen sijainnista
}
