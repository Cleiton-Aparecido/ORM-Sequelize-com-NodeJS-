const { Router } = require("express")
const PessoaController = require('../controllers/Pessoascontroller.js')

const router = Router()

router.get('/pessoas',PessoaController.pegaTodasAsPessoas)
router.get('/pessoas/:id',PessoaController.ColetarInforUsuario)
router.post('/pessoas',PessoaController.CriarUsuario)
router.put('/attpessoas/:id',PessoaController.AtualizarUsuario)
router.delete('/pessoas/:id',PessoaController.DeletarUsuario)

module.exports = router