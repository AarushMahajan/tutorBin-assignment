const mongoose = require('mongoose');
const userSchema = require('./user-model/user-model');
const todoSchema = require('./todo-model/todo-model');

let getModel = function (modelName, body) {
    switch (modelName) {
        case 'users':
            let User = mongoose.model('users', userSchema);
            return body ? new User(body) : User;
        case 'todo':
            const Todo = mongoose.model('todo', todoSchema);
            return body ? new Todo(body) : Todo;
        default:
    }
};

module.exports = {
    getModel
}
