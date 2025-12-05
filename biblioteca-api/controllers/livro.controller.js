// controllers/livro.controller.js
const db = require("../models");
const Livro = db.livros;

exports.criar = (req, res) => {
  console.log("Dados recebidos (req.body):", req.body);

  if (!req.body.nome || !req.body.autor) {
    return res.status(400).send({ message: "Nome e autor são obrigatórios!" });
  }

  const livro = {
    nome: req.body.nome,
    autor: req.body.autor,
    ano: req.body.ano,
    disponibilidade: req.body.disponibilidade,
  };

  Livro.create(livro)
    .then((data) => res.status(201).send(data))
    .catch((err) =>
      res.status(500).send({
        message: err.message || "Erro ao tentar salvar o livro.",
      })
    );
};

exports.listar = (req, res) => {
  Livro.findAll()
    .then((data) => res.send(data))
    .catch((err) =>
      res.status(500).send({
        message: err.message || "Erro ao listar os livros.",
      })
    );
};
