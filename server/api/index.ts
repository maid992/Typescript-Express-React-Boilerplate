import * as express from 'express'
import publicApi from './public'


export const api = (server: express.Express) => {
  server.use('/api/public', publicApi)
}
