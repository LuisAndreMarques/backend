const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

//user Schema
const UserSchema = Schema({
    first_name: { type: String, required: true},
    last_name: { type: String, required: true},
    username : {type:String, required:true, unique: true},
    email: { type:String, required: true, unique:true},
    password: { type: String, required: true },
    birthdate: { type: String, default: '01/01/1969'},
    steam_id: { type: String, unique: true},
    level: { type: Number, default: 0},
    ingame_name: { type: String, default:''},
	credits: { type: Number, default: 0},
	premium: { type: Boolean , default: false },
	anti_cheat: { type: Boolean , default: false },
	anti_cheat_id: { type: String, unique:true, default: '' }
});


UserSchema.statics.hashPassword = function hashPassword(password){
    return bcrypt.hashSync(password,10);
}

UserSchema.methods.isValid = function(hashedpassword){
    return  bcrypt.compareSync(hashedpassword, this.password);
}

module.exports = mongoose.model('User',UserSchema);