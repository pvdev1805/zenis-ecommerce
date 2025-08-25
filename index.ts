import express from 'express'
import path from 'path'
import adminRoutes from './routes/admin/index.route'
import clientRoutes from './routes/client/index.route'

const app = express()
const port = 3000

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoutes)

app.use('/', clientRoutes)

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
