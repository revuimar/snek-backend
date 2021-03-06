var PostService = require('../services/post.service');

_this = this;

exports.getPosts = async function(req,res,next){
    //option = queryparameter ? queryparameter : defaultvalue;
    var page = req.query.page ? req.query.page : 1;
    var limit = req.query.limit ? req.query.limit : 10;

    try{
        var posts = await PostService.getPosts({}, page, limit);
        return res.status(200).json({status: 200, data: posts, message: "Succesfully Posts Recieved"});
    }catch(e){
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.createPost = async function(req, res, next){
    // Req.Body contains the form submit values.
    var post = {
        title: req.body.title,
        description: req.body.description,
        solved: req.body.solved,
        votes: req.body.votes,
        tags: req.body.tags,
        comments: req.body.comments
    };

    try{
        var createdPost = await PostService.createPost(post);
        return res.status(201).json({status: 201, data: createdPost, message: "Succesfully Created Post"});
    }catch(e){
        return res.status(400).json({status: 400, message: "Post Creation was Unsuccesfull"});
    }
}

exports.updatePost = async function(req, res, next){
    if(!req.body._id){
        return res.status(400).json({status: 400., message: "Id must be present"})
    }
    var id = req.body._id;
    console.log(req.body);
    var post = {
        id,
        title: req.body.title ? req.body.title : null,
        description: req.body.description ? req.body.description : null,
        solved: req.body.solved ? req.body.solved : null,
        votes: req.body.votes ? req.body.votes : null,
        tags: req.body.tags ? req.body.tags : null,
        comments: req.body.comments ? req.body.comments : null
        //author: post.author
    };
    try{
        var updatedPost = await PostService.updatePost(post);
        return res.status(200).json({status: 200, data: updatedPost, message: "Succesfully Updated Post"});
    }catch(e){
        return res.status(400).json({status: 400., message: e.message});
    }
}

exports.removePost = async function(req, res, next){
    var id = req.params.id;
    try{
        var deleted = await PostService.deletePost(id);
        return res.status(204).json({status:204, message: "Succesfully Post Deleted"});
    }catch(e){
        return res.status(400).json({status: 400, message: e.message});
    }
}