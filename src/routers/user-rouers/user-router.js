let express = require('express');
let router = new express.Router();
let userController = require('../../controller/user-controller/user-controller');
let auth = require('../../middleware/auth/auth');

router.post('/v1/user/signUp', userController.createUser);
router.get('/v1/user/login', auth.authenticateUser, userController.userLogin);
router.get('/',(req, res) => {
    res.send("Welcome to TODO APP !!!")
})

module.exports = router