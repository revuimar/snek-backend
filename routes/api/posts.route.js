var express = require('express');
var router = express.Router();

var PostController = require('../../controllers/posts.controller');

router.get('/posts',PostController.getPosts);
router.post('/posts',PostController.createPost);
router.put('/posts',PostController.updatePost);
router.delete('/post/:id',PostController.removePost);

module.exports = router;