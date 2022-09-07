const _ = require('lodash');
const models = require('../../models/models');
const authMiddleWare = require('../../middleware/auth/auth');
const userUtils = require('./user.utils');

let userLogin = async function (req, res) {
    try {
        res.status(200).send({result: req.sessions.user});
    }
    catch (e) {
        return res.status(400).send({error: e.message});
    }
}

let createUser = async function (req, res) {
    let params = {
        userId: req.body.userId,
        username: req.body.username,
        email: req.body.email
    }
    try {
        userUtils.userDataValidation(req.body);
        let User = models.getModel('users', req.body);
        const token = authMiddleWare.createJwtAuthToken(params);
        console.log("TOKEN ####### ", token);
        await User.save();
        res.status(201).json({
            message: 'User registered successfully',
            token
        });
    }
    catch (e) {
        console.log('error ## ', e);
        res.status(400).json({ error: e.message });
    }
}

module.exports = {
    userLogin,
    createUser
}