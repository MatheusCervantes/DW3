const db = require("../../../database/databaseconfig");

const GetAllEscola = async () => {
    return (
        await db.query(
            "SELECT * " + "FROM escola where deleted = false ORDER BY nome ASC"
        )
    ).rows;
};

const GetEscolaByID = async (escolaIDPar) => {
    return (
        await db.query(
            "SELECT * " +
            "FROM escola WHERE escolaid = $1 and deleted = false ORDER BY nome ASC",
            [escolaIDPar]
        )
    ).rows;
};

const InsertEscola = async (registroPar) => {
    //@ Atenção: aqui já começamos a utilizar a variável msg para retornor erros de banco de dados.
    let linhasAfetadas;
    let msg = "ok";
    try {
        linhasAfetadas = (
            await db.query(
                "INSERT INTO escola " + "values(default, $1, $2, $3, $4)",
                [
                    registroPar.codigo,
                    registroPar.nome,
                    registroPar.dataAbertura,
                    registroPar.deleted,
                ]
            )
        ).rowCount;
    } catch (error) {
        msg = "[mdlEscola|insertEscola] " + error.detail;
        linhasAfetadas = -1;
    }

    return { msg, linhasAfetadas };
};

const UpdateEscola = async (registroPar) => {
    let linhasAfetadas;
    let msg = "ok";
    try {
        linhasAfetadas = (
            await db.query(
                "UPDATE escola SET " +
                "codigo = $2, " +
                "nome = $3, " +
                "dataAbertura = $4, " +
                "deleted = $5 " +
                "WHERE escolaid = $1",
                [
                    registroPar.escolaid,
                    registroPar.codigo,
                    registroPar.nome,
                    registroPar.dataAbertura,
                    registroPar.deleted,
                ]
            )
        ).rowCount;
    } catch (error) {
        msg = "[mdlEscola|UpdateEscola] " + error.detail;
        linhasAfetadas = -1;
    }

    return { msg, linhasAfetadas };
};


const DeleteEscola = async (registroPar) => {
    let linhasAfetadas;
    let msg = "ok";

    try {
        linhasAfetadas = (
            await db.query(
                "UPDATE escola SET " + "deleted = true " + "WHERE escolaid = $1",
                [registroPar.escolaid]
            )
        ).rowCount;
    } catch (error) {
        msg = "[mdlEscola|DeleteEscola] " + error.detail;
        linhasAfetadas = -1;
    }

    return { msg, linhasAfetadas };
};


module.exports = {
    GetAllEscola,
    GetEscolaByID,
    InsertEscola,
    UpdateEscola,
    DeleteEscola,
};