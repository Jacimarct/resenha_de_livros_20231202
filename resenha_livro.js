// Exemplo simples de JavaScript para interação do usuário
document.addEventListener('DOMContentLoaded', function() {
    const livroContainer = document.querySelector('.livro-container');
    
    livroContainer.addEventListener('click', function() {
        // Simulação de ação ao clicar no livro
        alert('Livro clicado! Redirecionando para a página do livro.');
        // Adicione o redirecionamento real aqui
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const verSinopseBtns = document.querySelectorAll('.ver-sinopse');
    const verResenhaBtns = document.querySelectorAll('.ver-resenha');

    verSinopseBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            // Lógica para mostrar a sinopse
            alert('Ver Sinopse: Breve descrição do livro.');
        });
    });

    verResenhaBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            // Lógica para redirecionar para a página de resenha completa
            alert('Redirecionar para a resenha completa.');
        });
    });
});
