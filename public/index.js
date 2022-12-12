
const express = require('express');
const routes = require('../api/routes/index.js')


const app = express()
const port = 3000

routes(app)


app.listen(port, () => console.log(`Servidor esta rodando na porta http://localhost:${port}`))

// export default app;