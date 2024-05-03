import express from 'express'
import { Router } from 'express'
import { ipcController } from './controllers/ipcController'

const app = express()
const router = Router()

router.get('/', ipcController.getAll)


const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})