import * as Schema from "mongoose";

var User = require('user.model');
var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');


var PostSchema = new mongoose.Schema({
    title: String,
    body: String,
    solved: Boolean,
    id: Number,
    votes: Number,
    tags: String,
    comments: String,
    author: User//Schema.ObjectId????
});

PostSchema.plugin(mongoosePaginate);
const Post = mongoose.model('Post', PostSchema);

module.exports = Post;