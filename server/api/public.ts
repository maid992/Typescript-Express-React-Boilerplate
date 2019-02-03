import * as express from 'express'

const router = express.Router()

router.get('/products', async (req, res) => {
  res.send('products from api')
})

router.get('/people', async (req, res) => {
  res.send('peeeps!!! api')
})

export default router