const mongoose = require('mongoose');

const Categories = mongoose.model('categories', {
    id_categorie: Number,
    nom_categorie: String,
})

module.exports = Categories