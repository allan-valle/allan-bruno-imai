class ObraDeArte{
    constructor(titulo, imagem, sinopse, data, diretor, imdb, classificacao){
        this.titulo=titulo;
        this.imagem=imagem;
        this.sinopse=sinopse;
        this.data=data;
        this.diretor=diretor;
        this.imdb=imdb;
        this.classificacao=classificacao;
    }

    gerarHtml(){
        const novo = `
            <div class="filme">
        <div class="movie">
            <img src="https://cultura.uol.com.br/upload/tvcultura/entretenimento/20250811114239_homemaranha4teaserbastidores.jpg" class="imagem" alt="Homem-Aranha: Um Novo Dia">
            <div class="info">
                <h2 class="titulo">Homem-Aranha: Um Novo Dia</h2>
                <p class="sinopse">
                    Homem-Aranha: Um Novo Dia acompanha Peter Parker quatro anos após Sem Volta Para Casa, vivendo isolado e sem memórias de seus amigos. Como um herói anônimo, ele protege Nova York em tempo integral, mas enfrenta uma perigosa evolução física e uma nova ameaça misteriosa.
                </p>
                <div class="detalhes">
                    <p class="classificacao"><strong>Classificação:</strong> 14 anos</p>
                    <p class="imdb"><strong>IMDb:</strong> 8.3 ⭐</p>
                    <p class="diretor"><strong>Diretor:</strong> Destin Daniel Cretton</p>
                    <p class="data"><strong>Data de lançamento:</strong> 30/07/2026</p>
                </div>
            </div>
        </div>
        `
    }
} 

var teste1 = new ObraDeArte("titulo teste", "imagem teste", "sinopse teste", "data teste", "diretor teste", "imdb teste", "classificacao teste")