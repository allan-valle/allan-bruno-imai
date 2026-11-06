const express = require('express');
const app = express();
const mysql = require

// Middleware para ler o JSON vindo do formulário (POST)
app.use(express.json());

// Serve a pasta 'site' (HTML, CSS e JS do navegador)
app.use(express.static(path.join(__dirname, 'site')));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ifsp',
    database: 'catalogo'
})

db.connect((erro)=>{
    if(erro){
        console.error(':(',erro);
    }
    else{
        console.log('conectando ao banco!');
    }
});

// Rota GET: devolve a lista inteira para a página principal
app.get('/api/lista', (req, res) => {
    db.query('SELECT * FROM filme', (erro, resultado)=>{
        if(erro){
            console.error('erro ao recuperar obras',erro);
            return res.status(500),json({erro: 'erro ao buscar os dados'});
        }
    });
    res.json(lista);
});

// Rota POST: recebe um novo filme do formulário e guarda na lista
app.post('/api/lista', (req, res) => {
    const campos = ['titulo', 'imagem', 'sinopse', 'data', 'diretor', 'imdb', 'classificacao'];
    const faltando = campos.filter(campo => !req.body[campo]);

    const novoFilme = {};
    campos.forEach(campo => { novoFilme[campo] = String(req.body[campo]); });

    lista.push(novoFilme);
    salvar();
    res.status(201).json({ status: "sucesso" });
});

app.listen(3000, () => {
    console.log("🚀 Servidor escutando em http://localhost:3000");
});
