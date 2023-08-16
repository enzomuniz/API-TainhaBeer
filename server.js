//Pacote para abrir o server
const express = require("express");
//Pacote para reconhecer o body das requisições
const bodyParser = require("body-parser");

//Definindo a porta(pode ser qualquer uma) a porta que definirmos aqui deve ser a mesma que escreveremos no URL(lá no postman)
const port = 3000;

//Importando arquivo de rotas
const cervejasRoutes = require('./routes/cervejas')


const app = express();
//Configuração do bodyParser - nosso app vai usar o bodyParser e vai ler o json que colocarmos no body (lá no postman)
app.use(bodyParser.json());

//O app usará o arquivo de rotas utilizando o "/" o que acessará o arquivo das rotas que foi importado acima
app.use('/', cervejasRoutes);

app.listen(port, () => {
    console.log(`Servidor express rodando na porta ${port}`);
});
