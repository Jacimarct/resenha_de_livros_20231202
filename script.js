document.addEventListener('DOMContentLoaded', function() {
    const livrosLista = document.getElementById('livros-lista');

    // Exemplo de adição dinâmica de livros
    const livros = [
        { titulo: 'Dom Casmurro', autor: 'Machado de Assis', resenha: 'Uma clássica obra da literatura brasileira...' },
        { titulo: 'Memórias Póstumas de Brás Cubas', autor: 'Machado de Assis', resenha: 'A irreverente narrativa de um defunto autor...' },
        // Adicione mais livros conforme necessário
    ];

    livros.forEach(livro => {
        const item = document.createElement('li');
        item.classList.add('livro-item');

        const conteudo = `
            <img src="caminho/para/capa/${livro.titulo}.jpg" class="Capa_livro" alt="${livro.titulo}">
            <div class="livro-info">
                <h2>${livro.titulo}</h2>
                <p>Autor: ${livro.autor}</p>
                <p>Resenha: ${livro.resenha}</p>
            </div>
        `;

        item.innerHTML = conteudo;
        livrosLista.appendChild(item);
    });
});
