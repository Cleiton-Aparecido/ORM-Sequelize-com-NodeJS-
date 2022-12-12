const { Router } = require("express")
const TurmasController = require('../controllers/Turmascontroller.js')
const { get } = require("./pessoasRoutes.js")

const router = Router()

router.get('/Turmas',TurmasController.pegaTodasAsTurmas)

module.exports = router