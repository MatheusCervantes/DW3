//@ Importa as bibliotecas e arquivos
const express = require("express");
const routerApp = express.Router();
const appCalculadora = require("../controller/ctlCalculadora");

//@ Configura as rotas
routerApp.post("/calculadora", appCalculadora.calculadora);

//@ Exporta a variável com as rotas
module.exports = routerApp;