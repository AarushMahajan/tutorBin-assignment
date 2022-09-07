const Schema = require('mongoose').Schema;

const postSchema = new Schema({
    todoId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
    },
    assignedTo: {
        type: String,
        required: true,
    }

}, { strict: false, timestamps: true });

module.exports = postSchema