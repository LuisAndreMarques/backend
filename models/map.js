const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//user Schema
const MapSchema = Schema({
    name : { type: String, require: true},
    active : {type: Boolean, require: true },
    rank : { type:Number, default:0 },
    votes : [ ],
    nb_games_played : {type:Number, default:0},
    nb_wins : { type:Number, default:0 },
    nb_looses : { type: Number, default:0 },
    nb_ties : { type:Number, default:0 }
});




module.exports = mongoose.model('Map',MapSchema);