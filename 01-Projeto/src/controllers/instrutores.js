const { instrutores } = require("../bancoDeDados");
let { identificadorInstrutor } = require("../bancoDeDados");

const listarInstrutores = (req, res) => {
  return res.status(200).json(instrutores);
};

const listarInstrutorPorId = (req, res) => {
  const { id } = req.params;
  const instrutor = instrutores.find(
    (instrutor) => instrutor.id === Number(id)
  );
  if (!instrutor) {
    return res.status(404).json({ mensagem: "Instrutor não encontrado" });
  }
  return res.status(200).json(instrutor);
};

const cadastrarInstrutor = (req, res) => {
  const { nome, idade, areaDeAtuacao, especialidades } = req.body;

  if (!nome || !idade || !areaDeAtuacao) {
    return res
      .status(400)
      .json({ mensagem: "Preencher os campos obrigatórios" });
  }
  const novoInstrutor = {
    id: identificadorInstrutor++,
    nome,
    idade,
    areaDeAtuacao,
    especialidades,
  };
  instrutores.push(novoInstrutor);
  return res.status(201).json(novoInstrutor);
};

const atualizarInstrutor = (req, res) => {
  const { id } = req.params;
  const { nome, idade, areaDeAtuacao, especialidades } = req.body;
  const instrutor = instrutores.find(
    (instrutor) => instrutor.id === Number(id)
  );
  if (!instrutor) {
    return res.status(404).json({ mensagem: "Instrutor não encontrado" });
  }
  if (!nome || !idade || !areaDeAtuacao || !especialidades) {
    return res.status(400).json({ mensagem: "Preencher todos os campos" });
  }
  instrutor.nome = nome;
  instrutor.idade = idade;
  instrutor.areaDeAtuacao = areaDeAtuacao;
  instrutor.especialidades = especialidades;

  return res.status(200).json(instrutor);
};

const atualizarAreaDeAtuacao = (req, res) => {
  const { id } = req.params;
  const { areaDeAtuacao } = req.body;
  const instrutor = instrutores.find(
    (instrutor) => instrutor.id === Number(id)
  );
  if (!instrutor) {
    return res.status(404).json({ mensagem: "Instrutor não encontrado" });
  }
  if (!areaDeAtuacao) {
    return res
      .status(400)
      .json({ mensagem: "Atualizar o campo área de Atuação" });
  }
  instrutor.areaDeAtuacao = areaDeAtuacao;

  return res.status(200).json(instrutor);
};

const deletarInstrutor = (req, res) => {
  const { id } = req.params;
  const instrutor = instrutores.find(
    (instrutor) => instrutor.id === Number(id)
  );
  if (!instrutor) {
    return res.status(404).json({ mensagem: "Instrutor não encontrado" });
  }
  instrutores.splice(instrutor, 1);
  return res.status(200).json(instrutores);
};

module.exports = {
  listarInstrutores,
  listarInstrutorPorId,
  cadastrarInstrutor,
  atualizarInstrutor,
  atualizarAreaDeAtuacao,
  deletarInstrutor,
};
