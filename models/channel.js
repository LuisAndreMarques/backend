const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//user Schema
const ChannelSchema = Schema({
    name : { type:String, require:true},
    nb_players : { type:Number, default: 0},
	nb_players_day : { type:Number, default: 0},
	nb_players_total : { type:Number, default: 0},
    players : [{type: ObjectId}]
});


module.exports = mongoose.model('ChannelSchema',ChannelSchema);