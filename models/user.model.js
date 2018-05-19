
var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');


var UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    registration_date: Date,
    avatar: String
});

UserSchema.plugin(mongoosePaginate);
const User = mongoose.model('User', UserSchema);

module.exports = User;