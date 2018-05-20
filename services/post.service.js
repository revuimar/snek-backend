// Gettign the Mongoose Model
var Post = require('../models/post.model');

// Saving the context of this module inside the _the variable
_this = this;

// Async function to get the posts list
exports.getPosts = async function (query, page, limit) {
    //mongoose paginate https://www.npmjs.com/package/mongoose-paginate
    var options = {
        page,
        limit
    };
    // Try Catch the awaited promise to handle the error
    try {
        var posts = await Post.paginate(query, options);
        // Return the posts list that was returned by the mongoose promise
        return posts;
    } catch (e) {
        throw Error('Error while Paginating Posts');
    }
}
exports.createPost = async function(post){

    // Creating a new Mongoose Object by using the new keyword
    var newPost = new Post({
        title: post.title,
        description: post.description,
        date: new Date(),
        solved: post.solved,
        votes: post.votes,
        tags: post.tags,
        comments: post.comments,
        //author: post.author
    });

    try{
        // Saving the Post
        var savedPost = await newPost.save();
        return savedPost;
    }catch(e){
        throw Error("Error while Creating Post");
    }
}

exports.updatePost = async function(post){
    var id = post.id;

    try{//Find the old Post Object by the Id
        var oldPost = await Post.findById(id);
    }catch(e){
        throw Error("Error occured while Finding the Post");
    }
    if(!oldPost){
        return false;
    }

    console.log(oldPost);

    //Edit the Post Object
    oldPost.title = post.title;
    oldPost.description = post.description;
    oldPost.solved = post.solved;
    oldPost.votes = post.votes;
    oldPost.tags = post.tags;
    oldPost.comments = post.comments;

    console.log(oldPost);

    try{
        var savedPost = await oldPost.save();
        return savedPost;
    }catch(e){
        throw Error("And Error occured while updating the Post");
    }
}

exports.deletePost = async function(id){
    try{
        var deleted = await Post.remove({_id: id})
        if(deleted.result.n === 0){
            throw Error("Post Could not be deleted")
        }
        return deleted
    }catch(e){
        throw Error("Error Occured while Deleting the Post")
    }
}

