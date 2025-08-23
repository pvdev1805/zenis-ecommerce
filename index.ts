import express, { Request, Response } from 'express'
import path from 'path'

const app = express()
const port = 3000

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req: Request, res: Response) => {
  res.render('client/pages/home', {
    pageTitle: 'Home'
  })
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
