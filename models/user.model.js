var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");
var UserSchema = new mongoose.Schema({
    username:String,
    password:String,
    email: String,
    registration: Date,
    avatar: String,
    reputation: Number
});

UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User",UserSchema);