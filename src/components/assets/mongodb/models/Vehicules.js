const mongoose = require('mongoose');

const Vehicules = mongoose.model('vehicules', {
    id_vehicules: Number,
    nom_vehilcules: String,
    table_categorie: Array
})

module.exports = Vehicules