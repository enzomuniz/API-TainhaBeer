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
    const buscaCorreta = req.params.tipo.toLowerCase(); // o toLowerCase transforma aquilo que escrevemos no parametro(no url) em minuscula, para que busque independentemente de se está escrito da exata maneira
    database.query("SELECT * FROM CERVEJAS").then(
        (resultado) => {
            const tipo = resultado.rows.filter((cerveja) => cerveja.tipo.toLowerCase().includes(buscaCorreta)) // aqui ele filtra a lista de cervejas mostrando apenas aquelas cujo tipo inclui aquele que foi escrito no parametro e que foi mudado para totalmente minusculo. Além de transformar todos os tipos da lista em letras minusculas também, para buscar corretamente
            res.status(200).send({ tipo})
        },
        (erro) => {
            res.status(500).send({ erro: erro})
        }
    )
}

// FUNÇÂO QUE ORDENA ===================== o ORDER BY é uma função padrão do BANCO DE DADOS, ela ordena baseado naquilo que escrevemos depois do "by"
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

// FUNÇÃO DE POST
exports.postar = (req,res) => {
    const query = "INSERT INTO CERVEJAS(id, nome, abv, tipo, nacionalidade) values ($1, $2, $3, $4, $5);"; // o $1 indica que aquele valor, entre aqueles que será enviado, será o primeiro e assim sucessivamente, até o 5 nesse caso
    const values = [req.body.id, req.body.nome, req.body.abv, req.body.tipo, req.body.nacionalidade];

    database.query(query, values).then(
        () => {
            res.status(200).send({ mensagem: "Cerveja cadastrada com sucesso!" })
        },
        (erro) => {
            res.status(500).send({erro: erro})
        }
    )

}

// FUNÇÃO DE ATUALIZAR DADOS
exports.put = (req,res) => {
    const query = "UPDATE CERVEJAS SET nome=$2, abv=$3, tipo=$4, nacionalidade=$5 WHERE id=$1;"; // nesse caso aqui tem 5 valores com $, ali nos values escrevi na ordem que escreveria no body do site que relacionamos com o banco através do URL(postman)
    const values = [
        req.params.id,
        req.body.nome,
        req.body.abv,
        req.body.tipo,
        req.body.nacionalidade
    ]
    database.query(query, values).then(
        () => {
            res.status(200).send({ mensagem: "Cerveja atualizada com sucesso!"})
        },
        (erro) => {
            res.status(500).send({ erro: erro})
        }
    )
}

// FUNÇÃO DELETE
exports.deletar = (req,res) => {
    const query = "DELETE FROM CERVEJAS WHERE id=$1;"; 
    const values = [req.params.id];

    database.query(query, values).then(
        () => {
            res.status(200).json({ mensagem: "Cerveja removida com sucesso!"})
        },
        (erro) => {
            res.status(500).send({ erro: erro})
        }
    )

}
