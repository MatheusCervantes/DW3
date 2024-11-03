const express = require("express");
const routerApp = express.Router();

const appAlunos = require("../apps/alunos/controller/ctlAlunos");
const appCursos = require("../apps/cursos/controller/ctlCursos");
const appEscola = require("../apps/escola/controller/ctlEscola");
const appLogin = require("../apps/login/controller/ctlLogin");

// middleware that is specific to this router
routerApp.use((req, res, next) => {
    next();
});

routerApp.get("/", (req, res) => {
    res.send("Olá mundo!");
});

//Rotas de Alunos
routerApp.get("/getAllAlunos", appAlunos.getAllAlunos);
routerApp.post("/getAlunoByID", appLogin.AutenticaJWT, appAlunos.getAlunoByID);
routerApp.post("/insertAlunos", appLogin.AutenticaJWT, appAlunos.insertAlunos);
routerApp.post("/updateAlunos", appAlunos.updateAlunos);
routerApp.post("/DeleteAlunos", appAlunos.DeleteAlunos);

//Rotas de Cursos
routerApp.get("/GetAllCursos", appCursos.GetAllCursos);
routerApp.post("/GetCursoByID", appCursos.GetCursoByID);
routerApp.post("/InsertCursos", appCursos.InsertCursos);
routerApp.post("/UpdateCursos", appCursos.UpdateCursos);
routerApp.post("/DeleteCursos", appCursos.DeleteCursos);

//Rotas de Escola
routerApp.get("/GetAllEscola", appLogin.AutenticaJWT, appEscola.GetAllEscola);
routerApp.post("/GetEscolaByID", appLogin.AutenticaJWT, appEscola.GetEscolaByID);
routerApp.post("/InsertEscola", appLogin.AutenticaJWT, appEscola.InsertEscola);
routerApp.post("/UpdateEscola", appLogin.AutenticaJWT, appEscola.UpdateEscola);
routerApp.post("/DeleteEscola", appLogin.AutenticaJWT, appEscola.DeleteEscola);

// Rota Login
routerApp.post("/Login", appLogin.Login);
routerApp.post("/Logout", appLogin.Logout);

module.exports = routerApp;