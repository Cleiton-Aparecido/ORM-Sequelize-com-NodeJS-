const { json } = require("sequelize");
const database = require("../models");

class Matriculacontroller{
    static async pegaTodasAsMastriculas(req,res){
        try{
            const TodasAsMatriculas = await database.Matriculas.findAll()
            return res.status(200).json(TodasAsMatriculas)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }
    static async criarmatricula(req,res){
        const dados = req.body
        try {
            const RetornoCriacao = await database.Matriculas.create({
                status: dados.statusreq,
                estudante_id: dados.estudanteID,
                turma_id:dados.turmaID
            })
            return res.status(200).json(RetornoCriacao)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

}

module.exports = Matriculacontroller



