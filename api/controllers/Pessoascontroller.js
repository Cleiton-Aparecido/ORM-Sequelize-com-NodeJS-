// import database from "../models";
const { json } = require("sequelize");
const database = require("../models");

class PessoaController{
    static async pegaTodasAsPessoas(req,res){
        try{
            const TodasAsPessoas = await database.Pessoas.findAll()
            return res.status(200).json(TodasAsPessoas)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }
    static async ColetarInforUsuario(req,res){
        try {
            const data = new Date();
            console.log(data.getFullYear(),"-",data.getMonth(),"-",data.getDate(),data.getHours(),data.getMinutes(),data.getSeconds())
            const { id } = req.params
            const  dados = await database.Pessoas.findOne({
                where:{
                    id : Number(id)
                }
            })
            return res.status(200).json(dados)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async CriarUsuario(req,res){
        const NovoUsuario = req.body
        try {
            const NovoUsuarioSalvo = await database.Pessoas.create(NovoUsuario)
            return res.status(200).json(NovoUsuarioSalvo)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async DeletarUsuario(req,res){
        try {
            const { id } = req.params
            const  RetornoDoDelete = await database.Pessoas.destroy({
                where: {
                    id : Number(id)
                }
            })
            return res.status(200).json({messagem: `Deletado com sucesso o id ${id}`})
        } catch (error) {
            return res.status(500).json(error.message)
        }

    }
    static async AtualizarUsuario(req,res){
        try {
            const { id } = req.params
            const dadosNovos  = req.body
            const  returnodaatt = await database.Pessoas.update({
                    nome: dadosNovos.nome,
                    ativo: dadosNovos.ativo,
                    email: dadosNovos.email,
                    role: dadosNovos.role
                },
                {
                    where: {
                    id : Number(id)
                }
            })
            return res.status(200).json(returnodaatt)
        } catch (error) {
            return res.status(500).json(error.message)
        }

    }


}

module.exports = PessoaController   