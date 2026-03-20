import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const distPath = path.join(__dirname, 'dist')
const port = Number(process.env.PORT) || 5000

const app = express()

app.use(express.static(distPath))

// SPA fallback para Heroku e acesso direto a rotas futuras.
app.use((_req, res) => {
  res.sendFile(path.join(distPath, 'index.html'))
})

app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor iniciado na porta ${port}`)
})
