<script>
// Função para exibir uma mensagem ao clicar nos botões
function handleButtonClick(courseName) {
    alert("Você escolheu o curso: " + courseName);
}

// Alternar menu responsivo
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

// Mudar a cor do header ao rolar a página
window.onscroll = function() {
    const header = document.querySelector('header');
    if (window.pageYOffset > 50) {
        header.style.backgroundColor = '#5CA9E6'; // Azul claro
    } else {
        header.style.backgroundColor = '#1F3A63'; // Azul escuro
    }
}
</script>
