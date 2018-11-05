const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//user Schema
const GameSchema = Schema({
    canal_id : { type: ObjectId , require:true },
    server_id : { type: ObjectId , require:true },
    time : { type: Date, default: Date.now },
    players : [{type: ObjectId}],
    maps : [ mongoose.Schema({
        map_id: {type: ObjectId},
        map_nb_votes: {type:Number, default:0},
        map_voters: [{type: ObjectId}]
    }, { _id: false }) ],
    score_fp: {
        team_a : {type: Number, default: 0},
        team_b : {type: Number, default: 0}
    },
    score_sp: {
        team_a : {type: Number, default: 0},
        team_b : {type: Number, default: 0}
    },
    state: {type: Number, default: 0},
    winner_game: {type: String, default: ''}
});




module.exports = mongoose.model('GameSchema',GameSchema);