const mongoose = require("mongoose");
const express = require("express");
const app = express();
const Vehicules = require('./models/Vehicules');
const Categories = require('./models/Categories');
const cors = require('cors');
const Utilisateurs = require("./models/Utilisateurs");
const FavorisUser = require('./models/FavorisUser');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
// const bcrypt = require("bcrypt");

app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())

const optionsCors = {
  origin: true,
  credentials: true,
}

app.use(cors(optionsCors));

app.use(cookieParser());

// const maxAge = 3 * 24 * 60 * 60;
// const tokenLog = (id) => {
//   return jwt.sign(id, 'test', {
//     expiresIn: maxAge, 
//   });
// }

mongoose.connect('mongodb://localhost:27017/PrestigeAuto', { useNewUrlParser: true})
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

app.post('/api/inscription', async (req, res) => {
  try {
    if(res){
      Utilisateurs.findOne({email : req.body.email},async (err, user) => {
        if(!user){
          //const hashPassword = await bcrypt.hashSync(String(req.body.password), 8);
          const utilisateurs = await Utilisateurs.create({
            email: req.body.email,
            mot_de_passe: req.body.password,
            nom: req.body.nom,
            prenom: req.body.prenom,
            pseudo: req.body.pseudo,
            addresse: req.body.addresse,
            creation_compte: new Date(),
          })
          jwt.sign({utilisateurs}, 'secret', (err,token) => {
            res.json({
              token: token,
              id: utilisateurs._id
            })
          });
        }
        else{
          res.send({message: "Compte déjà créer"});
        }
      });
    }
  } catch (error) {
    console.log(error);
  }
})

app.post('/api/connexion', async (req, res) => {
  try {
    if(res){
        // var cookieUser = req.cookies.name;
        var user = await Utilisateurs.findOne({email: req.body.email}).exec();
        // let varToken;
        if(!user){
          res.json({message: "N'est pas le bon mail"});
        }
        else{
          if(user.mot_de_passe === req.body.password){
            res.header('Access-Control-Allow-Origin', "http://localhost:3000");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.header( 'Access-Control-Allow-Credentials',true);
            const userToken = req.body.email + String(req.body.password);
            jwt.sign({userToken}, 'secret', (err,token) => {
              // varToken = token;
              // console.log(varToken);
              res.cookie('cookieToken', token, {httpOnly: false});
              res.json({
                token : token,
                id: user._id
              })
            });
            res.cookie('cookieUser', user._id, {httpOnly: false });
          }
          else{
            res.json({message: "Mauvais mot de passse"});
          }
            // bcrypt.hash(req.body.password, 10, function(err,hashMatch){
            //   bcrypt.compare(req.body.password,hashMatch,function(err,isMatch){
            //     console.log(isMatch);
            //     if(!isMatch){
            //       res.json({message: "Mauvais mot de passe"});
            //     }
            //     else{
            //       const userToken = req.body.email + String(req.body.password);
            //       jwt.sign({userToken}, 'secret', (err,token) => {
            //         res.json({
            //           token
            //         })
            //       });
            //     }
            //   });
            // });
          }
      }
  } catch (error) {
    console.log(error);
  }
})


app.get('/api/favoris_utilisateurs',(req, res) => {
  // const tokenValue = req.cookies['cookieToken'];
  const userValue = req.cookies['cookieUser'];
  // console.log(tokenValue);
  // console.log(userValue);
  FavorisUser.findOne({id_utilisateur: userValue}, (err, fvuser) => {
    if(err){
      res.json(err);
    }
    else{
        res.json(fvuser);
    }
  })
})