const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//user Schema
const GameUserSchema = Schema({
    user_id : {type: ObjectId, require:true},
    user_steam_id: {type: String, require:true},
    team: { type:String, default:''},
    kills : { 
        first_part: {type:Number},
        second_part: {type:Number}
    },
    assists: { 
        first_part: {type:Number},
        second_part: {type:Number}
    },
    deaths: { 
        first_part: {type:Number},
        second_part: {type:Number}
    },
    damages: { 
        first_part: {type:Number},
        second_part: {type:Number}
    },
    headshots: { 
        first_part: {type:Number},
        second_part: {type:Number}
    }
});




module.exports = mongoose.model('GameUser',GameUserSchema);