import * as express from 'express'
import { api } from './api';

const app = express()


app.use(express.static('dist', {
  extensions: ['html', 'htm']
}))

app.get('/', (req, res) => {
  res.sendFile('../dist/index.html')
})

api(app)

app.listen(3000, () => {
  console.log('Server started on port 3000!!!')
})
