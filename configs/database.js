const pg = require("pg");

const database = new pg.Client("postgres://dzfrgizj:mM33nXZou7FERGJEyu1E9SBzpjZfRsKU@silly.db.elephantsql.com/dzfrgizj");

database.connect((erro) => {
    if(erro) {
        return console.log("Não foi possível se conectar com o banco" , erro);
    }else{
        return console.log("Conectado ao ElephantSQL!")
    }
});

module.exports = database;