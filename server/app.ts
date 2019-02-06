import * as express from 'express'
import { api } from './api';
import { createConnection } from 'typeorm';
import { User } from './entity/User';

createConnection().then(async connection => {
  
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

  console.log("Loading users from the database...");
  const users = await connection.manager.find(User);
  console.log("Loaded users: ", users);

}).catch(error => console.log(error));
