// Lisää JavaScript-koodi, joka mahdollistaa responsiivisen toiminnallisuuden

// Hae valikko-elementti
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

// Lisää kuuntelija valikko-kuvakkeelle
menuIcon.addEventListener('click', () => {
  // Lisää tai poista 'active' -luokka valikosta
  navbar.classList.toggle('active');
});

// Lisää kuuntelija navigaatioelementeille
const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Poista 'active' -luokka valikosta, kun linkkiä klikataan pienillä näytöillä
    if (window.innerWidth <= 768) {
      navbar.classList.remove('active');
    }
  });
});

// Lisää kuuntelija ikkunan leveydelle muutoksille
window.addEventListener('resize', () => {
  // Poista 'active' -luokka valikosta, jos ikkunan leveys ylittää 768 pikseliä
  if (window.innerWidth > 768) {
    navbar.classList.remove('active');
  }
});
