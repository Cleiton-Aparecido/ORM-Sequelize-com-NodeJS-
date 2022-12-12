const { json } = require("sequelize");
const database = require("../models");

class Niveiscontroller{
    static async pegaTodasOsNiveis(req,res){
        try{
            const TodasOsNiveis = await database.Niveis.findAll()
            return res.status(200).json(TodasOsNiveis)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

}

module.exports = Niveiscontroller 

