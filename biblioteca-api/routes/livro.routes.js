// routes/livro.routes.js
const livros = require("../controllers/livro.controller");
const express = require("express");
const router = express.Router();

router.post("/livros", livros.criar);

router.get("/livros", livros.listar);

module.exports = router;
