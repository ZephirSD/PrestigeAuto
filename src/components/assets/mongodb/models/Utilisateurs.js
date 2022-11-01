const mongoose = require('mongoose');

const Utilisateurs = mongoose.model('utilisateurs', {
    email: String,
    mot_de_passe: String,
    nom: String,
    prenom: String,
    pseudo: String,
    addresse: String,
    creation_compte: Date,
})

module.exports = Utilisateurs