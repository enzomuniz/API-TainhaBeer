const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;

const cervejasRoutes = require('./routes/cervejas')


const app = express();
app.use(bodyParser.json());
app.use('/', cervejasRoutes);

app.listen(port, () => {
    console.log(`Servidor express rodando na porta ${port}`);
});