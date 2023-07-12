// Função para fechar a navbar ao clicar em um link
function closeNavbar() {
    const navbar = document.querySelector('.navbar-collapse');
    if (navbar.classList.contains('show')) {
        navbar.classList.remove('show');
    }
}

// Função para fechar a navbar ao clicar fora dela
window.addEventListener('click', function (event) {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const target = event.target;

    if (!navbarToggler.contains(target) && !target.classList.contains('navbar-toggler')) {
        closeNavbar();
    }
});