const conteudoDaGaveta = localStorage.getItem("meusFilmes")
//criei uma const para guardar o que já existe no localStorage na gaveta "meusFilmes"

var galeria;

if(conteudoDaGaveta){
    galeria = JSON.parse(conteudoDaGaveta);//monta
}
else{
    galeria = [];
}

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

    const novoFilme = `
        <div class="card">
            <img src="${novo.imagem}" alt="${novo.titulo}">
            <h3>${novo.titulo}</h3>
            <p>${novo.sinopse}</p>
            <p><strong>Data:</strong> ${novo.data}</p>
            <p><strong>Diretor:</strong> ${novo.diretor}</p>
            <p><strong>IMDb:</strong> ${novo.imdb}</p>
            <p><strong>Classificação:</strong> ${novo.classificacao}</p>
        </div>
    `;

    const colecao = document.getElementById('colecao');
    colecao.innerHTML += novoFilme;
    galeria.push(novo);
    localStorage.stItem("meusFilmes", JSON.stringify(galeria))
    formulario.reset();
});
