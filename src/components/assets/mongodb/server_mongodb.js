const mongoose = require("mongoose");
const express = require("express");
const app = express();
const Vehicules = require('./models/Vehicules');
const Categories = require('./models/Categories');
const cors = require('cors');
// const router = require('express').Router()

app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())

app.use(cors());

mongoose.connect('mongodb://localhost:27017/PrestigeAuto')
.then(()=>{
  app.listen(5000);
  console.log('connecter mongo');
})
.catch((err) => console.log(err))

app.get('/api/vehicules', (req, res) => {
  Vehicules.find({}, (err, result) => {
    if(err){
      res.json(err);
    }
    else{
      res.json(result);
    }
  }).sort({"nom_vehicules": 1})
})

app.get('/api/categories', (req, res) => {
  Categories.find({}, (err, result) => {
    if(err){
      res.json(err);
    }
    else{
      res.json(result);
    }
  })
})

