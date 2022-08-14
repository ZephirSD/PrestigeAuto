const mongoose = require('mongoose');

const Vehicules = mongoose.model('vehicules', {
    id_vehicules: Number,
    nom_vehilcules: String,
    prix_unitaire: Number,
    table_categorie: Array
})

module.exports = Vehicules