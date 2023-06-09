const express = require('express')
const router = express.Router()
const blogcontroller = require('../controllers/blogcontroller.js')


router.get('/', blogcontroller.homepage)
router.get('/create-post', blogcontroller.createPost)




module.exports = router;
