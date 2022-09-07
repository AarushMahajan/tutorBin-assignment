'use strict'

const _ = require('lodash');

let todoValidation = async function (params) {
    const title = _.get(params, 'title');
    const description = _.get(params, 'description');

    try{
        if (_.isEmpty(title)) {
            throw new Error('Title cant be empty');
        }
    
        if (_.isEmpty(description)) {
            throw new Error('Description cant be empty');
        }
        
    }
    catch (e) {
        console.log('error :::: ', e);
        return Promise.reject(e);
    }

    
};

module.exports = {
    todoValidation
}