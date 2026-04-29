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
            <img src="${filme.capa}">
            <h3>${filme.titulo}</h3>
        </div>
    `;

console.log(novoFilme)

});