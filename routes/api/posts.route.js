var express = require('express');
var router = express.Router();

var PostController = require('../../controllers/post.controller');

router.get('/',PostController.getPosts);
router.post('/',PostController.createPost);
router.put('/',PostController.updatePost);
router.delete('/:id',PostController.removePost);

module.exports = router;