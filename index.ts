import express from 'express'
import path from 'path'
import dotenv from 'dotenv'

import adminRoutes from './routes/admin/index.route'
import clientRoutes from './routes/client/index.route'
import { pathAdmin } from './configs/variable.config'
import { connectDB } from './configs/database.config'

dotenv.config()

const app = express()
const port = 3000

connectDB()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(express.static(path.join(__dirname, 'public')))

app.locals.pathAdmin = pathAdmin

app.use(`/${pathAdmin}`, adminRoutes)

app.use('/', clientRoutes)

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
