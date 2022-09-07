'use strict'

const _ = require('lodash');
const uuid = require('uuid');
const models = require('../../models/models');
const todoUtils = require('../todo-controller/todo.utils');

let getTodos = async function (req, res) {
    const Todo = models.getModel('todo');
    const createdUser = req.session.user.userId;
    const query = {
        assignedTo: createdUser
    }

    try {
        const Todos = await Todo.find(query).lean();
        res.status(200).send({ results: Todos });
    }
    catch (e) {
        console.error('Error while get post', e);
        res.status(501).send('Error while get post');
    }
}

let createTodo = async function (req, res) {
    let params = {
        todoId: uuid.v4(),
        title: req.body.title,
        description: req.body.description,
        assignedTo: req.session.user.userId
    }

    try {
        await todoUtils.todoValidation(params);
        let Todo = models.getModel('todo', params);
        await Todo.save();
        res.status(201).json({
            message: 'Todo Created Successfully'
        });
    }
    catch (e) {
        console.error("error", e);
        res.send(e.message);
    }
}

let deleteTodo = async function (req, res) {
    const todoId = req.body.todoId || '';
    const userId = req.session.user.userId
    const Todo = models.getModel('todo');

    if (!todoId) {
        res.status(400).send('Todo Id is required');
    }

    try {
        const removedResult = await Todo.deleteOne({ todoId: todoId, assignedTo: userId });
        if (removedResult.deletedCount === 0) {
            throw new Error('User is not permited to delete this TODO!!')
        }
        res.send('Deleted Successfully');
    }
    catch (e) {
        console.log("Error while deleting TODO ", e);
        res.status(401).send(`Error while deleting TODO ${e}`);
    }

}

let updateTodo = async function (req, res) {

    const todoId = req.body.todoId || '';
    const userId = req.session.user.userId;
    const Todo = models.getModel('todo');

    const updateRequest = {
        title: req.body.title
    }

    if (!todoId) {
        res.status(400).send('Todo Id is required');
    }

    try {
        const updateResult = await Todo.updateOne({ todoId: todoId, assignedTo: userId }, updateRequest);
        if (updateResult.modifiedCount === 0) {
            throw new Error('User is not permited to delete this TODO!!')
        }
        res.send('Updated Successfully');
    }
    catch (e) {
        console.log("Error while updating TODO ", e);
        res.status(401).send(`Error while updating TODO ${e}`);
    }


}


module.exports = {
    createTodo,
    getTodos,
    deleteTodo,
    updateTodo
}