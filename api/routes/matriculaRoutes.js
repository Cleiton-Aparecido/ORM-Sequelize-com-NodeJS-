const { Router } = require("express")
const MatriculaController = require('../controllers/Matriculacontroller.js')

const router = Router()

router.get('/matriculas',MatriculaController.pegaTodasAsMastriculas)
router.post('/criarmatricula',MatriculaController.criarmatricula)
module.exports = router