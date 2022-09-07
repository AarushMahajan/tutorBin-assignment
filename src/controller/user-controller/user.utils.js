'use strict'

const Promise = require('bluebird');
const _ = require('lodash');
const models = require('../../models/models');
const bcrypt = require('bcrypt');


let userDataValidation = async function (params) {
    const name = _.get(params, 'name', '');
    const password = _.get(params, 'password', '');
    const userId = _.get(params, 'userId', '');
    const email = _.get(params, 'email', '');


    if (_.isEmpty(name)) {
        throw new Error('Name cant be empty');
    }
    if (_.isEmpty(password)) {
        throw new Error('Username cant be empty');
    }
    if (_.isEmpty(userId)) {
        throw new Error('Username cant be empty');
    }
    if (_.isEmpty(email)) {
        throw new Error('Username cant be empty');
    }
    
};

let checkUserAlreadyExistWithEmail = async function (email) {
    let User = models.getModel('users');
    let query = {
        email: email
    }
    try {
        let userData = await User.findOne(query).lean();
        if (!userData) {
            throw new Error('Invalid Credentials');
        }
        return Promise.resolve(userData);
    }
    catch (e) {
        console.error('error while fetching user data', e);
        return Promise.reject(e);
    }

}

let findByCredentials = async function(email, password){
    let User = models.getModel('users');
    let query = {
        email: email
    }
    try{
        let user = await User.findOne(query).lean();
        if (!user) {
            throw new Error('Invalid Credentials');
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            throw new Error('Invalid Credentials');
        }
        return Promise.resolve(user);
    }
    catch (e) {
        console.error('Error while fetching user data', e);
        return Promise.reject(e);
    }

}

module.exports = {
    userDataValidation,
    checkUserAlreadyExistWithEmail,
    findByCredentials
}