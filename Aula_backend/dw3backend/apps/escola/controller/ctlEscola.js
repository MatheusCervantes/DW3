const mdlEscola = require("../model/mdlEscola");

const GetAllEscola = (req, res) =>
    (async () => {
        let registro = await mdlEscola.GetAllEscola();
        res.json({ status: "ok", registro: registro });
    })();

const GetEscolaByID = (req, res) =>
    (async () => {
        const escolaID = parseInt(req.body.escolaid);
        let registro = await mdlEscola.GetEscolaByID(escolaID);

        res.json({ status: "ok", registro: registro });
    })();

const InsertEscola = (request, res) =>
    (async () => {
        //@ Atenção: aqui já começamos a utilizar a variável msg para retornar erros de banco de dados.
        const registro = request.body;
        let { msg, linhasAfetadas } = await mdlEscola.InsertEscola(registro);
        res.json({ status: msg, linhasAfetadas: linhasAfetadas });
    })();

const UpdateEscola = (request, res) =>
    (async () => {
        const registro = request.body;
        let { msg, linhasAfetadas } = await mdlEscola.UpdateEscola(registro);
        res.json({ status: msg, linhasAfetadas: linhasAfetadas });
    })();

const DeleteEscola = (request, res) =>
    (async () => {
        const registro = request.body;
        let { msg, linhasAfetadas } = await mdlEscola.DeleteEscola(registro);
        res.json({ status: msg, linhasAfetadas: linhasAfetadas });
    })();
module.exports = {
    GetAllEscola,
    GetEscolaByID,
    InsertEscola,
    UpdateEscola,
    DeleteEscola
};