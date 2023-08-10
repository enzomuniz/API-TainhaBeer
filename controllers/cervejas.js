const cervejas = require("../models/cervejas");

const database = require("../configs/database");


// FUNÇÂO QUE BUSCA TUDO DA TABELA DE CERVEJAS
exports.busca = (req,res) => {
    database.query("SELECT * FROM CERVEJAS").then(
        (resultado) => {
            res.status(200).send({ cervejas : resultado.rows})
        },
        (erro) => {
            res.status(500).send({ erro: erro})
        }
    )
}

// FUNÇÃO QUE BUSCA POR NOME
exports.buscaNome = (req,res) => {
    const buscaCorreta = req.params.nome.toLowerCase();
    database.query("SELECT * FROM CERVEJAS").then(
        (resultado) => {
            const nomeCerveja = resultado.rows.filter((cerveja) => cerveja.nome.toLowerCase().includes(buscaCorreta))
            res.status(200).send({ nomeCerveja})
        },
        (erro) => {
            res.status(500).send({ erro: erro})
        }
    )
}

// FUNÇÃO QUE BUSCA POR NACIONALIDADE
exports.buscaOrigem = (req,res) => {
    const buscaCorreta = req.params.nacionalidade.toLowerCase();
    database.query("SELECT * FROM CERVEJAS").then(
        (resultado) => {
            const origem = resultado.rows.filter((cerveja) => cerveja.nacionalidade.toLowerCase().includes(buscaCorreta))
            res.status(200).send({ origem})
        },
        (erro) => {
            res.status(500).send({ erro: erro})
        }
    )
}

// FUNÇÃO QUE BUSCA POR TIPO
exports.buscaTipo = (req,res) => {
    const buscaCorreta = req.params.tipo.toLowerCase();
    database.query("SELECT * FROM CERVEJAS").then(
        (resultado) => {
            const tipo = resultado.rows.filter((cerveja) => cerveja.tipo.toLowerCase().includes(buscaCorreta))
            res.status(200).send({ tipo})
        },
        (erro) => {
            res.status(500).send({ erro: erro})
        }
    )
}

// FUNÇÂO QUE ORDENA
exports.ordenar = (req,res) => {
    database.query("SELECT * FROM CERVEJAS order by abv DESC").then(
        (resultado) => {
            res.status(200).send({ cervejas : resultado.rows})
        },
        (erro) => {
            res.status(500).send({ erro: erro})
        }
    )
}

