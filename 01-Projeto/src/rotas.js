const {
  listarInstrutores,
  listarInstrutorPorId,
  cadastrarInstrutor,
  atualizarInstrutor,
  atualizarAreaDeAtuacao,
  deletarInstrutor,
} = require("./controllers/instrutores");

const express = require("express");

const rotas = express();

rotas.get("/instrutores", listarInstrutores);
rotas.get("/instrutores/:id", listarInstrutorPorId);
rotas.post("/instrutores", cadastrarInstrutor);
rotas.put("/instrutores/:id", atualizarInstrutor);
rotas.patch("/instrutores/:id/areaDeAtuacao", atualizarAreaDeAtuacao);
rotas.delete("/instrutores/:id", deletarInstrutor);

module.exports = rotas;
