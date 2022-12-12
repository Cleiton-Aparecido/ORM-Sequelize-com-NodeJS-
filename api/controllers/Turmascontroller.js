const { json } = require("sequelize");
const database = require("../models");

class Turmascontroller{
    static async pegaTodasAsTurmas(req,res){
        try{
            const TodasAsTurmas = await database.Turmas.findAll()
            return res.status(200).json(TodasAsTurmas)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

}

module.exports = Turmascontroller


