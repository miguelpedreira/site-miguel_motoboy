// Smooth scrolling for anchor links
const ola = "ola estou aqui e vin pra te ajudar ";
 console.log(ola);
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Form submission
const form = document.getElementById('deliveryForm');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Solicitação enviada com sucesso! Entraremos em contato em breve.');
        form.reset();
    });
}

// Sticky header on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
          
    }
 
});
