const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//user Schema
const ServerSchema = Schema({
    ip : { type:String, require:true },
    port : { type: Number, require:true },
    password : { type: String, require:true },
    rcon : { type: String, require:true },
    matchid: {type: ObjectId, required: true },
    occupied: { type: Boolean, required: true, default: false },
    blocked: { type: Boolean, required: true, default: false },
    blockedReason: { type: String }
});




module.exports = mongoose.model('Server',ServerSchema);