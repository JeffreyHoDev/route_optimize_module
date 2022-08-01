import express from 'express'
import knex from 'knex'
import cors from 'cors'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
dotenv.config()

let salt = 10

const app = express()
app.use(express.json())
app.use(cors())
const port = 9999

//pg version 14 
const knexQ = knex({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    port: 5432,
    user: "postgres",
    password: process.env.REACT_APP_dbpassword,
    database: "routeoptimizationwithgoogle"
  },
  searchPath: ['knex', 'public'],
});




app.get('/getUsers', (req,res) => {

  knexQ.select().table('users')
  .then(result => res.json(result))
  .catch(err => res.json(err))
})

app.get('/getVehicles', (req,res) => {

  knexQ.select().table('vehicles')
  .then(result => res.json(result))
  .catch(err => res.json(err))
})

app.get('/getPassengers', (req,res) => {

  knexQ.select().table('passengers')
  .then(result => res.json(result))
  .catch(err => res.json(err))
})

app.get('/getFleets', (req,res) => {

  knexQ.select().table('fleets')
  .then(result => res.json(result))
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

app.post('/addPassenger', (req, res) => {

  knexQ('passengers').insert(req.body)
  .then(response => {
    res.json(0)
  })
  .catch(err => res.json(err))
  
})


app.post('/addFleet', (req, res) => {

  knexQ('fleets').insert(req.body)
  .then(response => {
    res.json(0)
  })
  .catch(err => res.json(err))
  
})

app.post('/addVehicle', (req, res) => {

  knexQ('vehicles').insert(req.body)
  .then(response => {
    res.json(0)
  })
  .catch(err => res.json(err))
  
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})