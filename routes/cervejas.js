const express = require('express');
const router = express.Router();
const controller = require('./../controllers/cervejas');

router.get('/mostrar', controller.busca);
router.get('/nome/:nome', controller.buscaNome);
router.get('/origem/:nacionalidade', controller.buscaOrigem);
router.get('/tipo/:tipo', controller.buscaTipo);
router.get('/ordenar', controller.ordenar);
router.post('/postar', controller.postar);
router.put('/atualizar/:id' , controller.put);
router.delete('/deletar/:id' , controller.deletar);


module.exports = router;
