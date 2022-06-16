import express from 'express'
import knex from 'knex'
import cors from 'cors'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
dotenv.config()

let salt = 10

//pg version 14
const knexQ = knex({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    port: 5432,
    user: "postgres",
    password: process.env.REACT_APP_dbpassword,
    database: "routeOptimizationWithGoogle"
  },
  searchPath: ['knex', 'public'],
});

const app = express()
app.use(cors())
app.use(express.json())
const port = 9999


app.get('/getUsers', (req,res) => {
  console.log(req)
  knexQ.select().table('users')
  .then(result => console.log(result))
  .then(data => res.json({"ok": "ok"}))
  .catch(err => res.json(err))
})


app.post('/addUser', (req, res) => {
  bcrypt.hash(req.body.password, salt, (err, encrypted) => {
    
    if(err){
      res.json(err)
    }else {

      req.body.password = encrypted
      knexQ('users').insert(req.body)
      .then(response => {
        res.json(0)
      })
      .catch(err => res.json(err))
    }

  })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})