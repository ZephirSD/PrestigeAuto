const mongoose = require('mongoose');

const FavorisUser = mongoose.model('favoris_utilisateurs', {
    id_utilisateur: mongoose.Schema.Types.ObjectId,
    table_favoris: Array
})

module.exports = FavorisUser