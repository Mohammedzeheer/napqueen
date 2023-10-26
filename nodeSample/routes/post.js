var express = require('express');
var router = express.Router();
const postController = require('../controllers/postController')


router.get('/', postController.getblog) // GET /api/posts
router.get('/:id',postController.getblogById );  // GET /api/posts/:id
router.post('/',postController.addBlog);// POST /api/posts
router.put('/:id', postController.editBlog );// PUT /api/posts/:id
router.delete('/:id', postController.deleteBlog );   // DELETE /api/posts/:id


module.exports = router;
