const { Router } = require("express")
const NiveisController = require('../controllers/Niveiscontroller.js')

const router = Router()

router.get('/niveis',NiveisController.pegaTodasOsNiveis)

module.exports = router