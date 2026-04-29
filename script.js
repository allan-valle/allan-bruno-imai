const formulario = document.getElementById('form');

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    const novo = {
        titulo: document.getElementById('titulo').value,
        imagem: document.getElementById('imagem').value,
        sinopse: document.getElementById('sinopse').value,
        data: document.getElementById('data').value,
        diretor: document.getElementById('diretor').value,
        imdb: document.getElementById('imdb').value,
        classificacao: document.getElementById('classificacao').value
    };

    const novoFilme=`
        <div class="card">
            <img src="${filme.imagem}">
            <h3>${filme.titulo}</h3>
            <p>${filmes.sinopse}</p>
            <p>${filmes.data}</p>
            <p>${filmes.diretor}</p>
            <p>${filmes.imdb}</p>
            <p>${filmes.classificacao}</p>
        </div>
    `;

    const colecao = document.getElementById('colecao');
    console.log(novoFilme)
    formulario.innerHTML(novoFilme)

});
