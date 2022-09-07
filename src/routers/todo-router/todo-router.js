let express = require('express');
let router = new express.Router();
let todoController = require('../../controller/todo-controller/todo-controller');
let auth = require('../../middleware/auth/auth');

router.get('/v1/todo', auth.authenticateUser, todoController.getTodos);
router.post('/v1/todo', auth.authenticateUser, todoController.createTodo);
router.patch('/v1/todo', auth.authenticateUser, todoController.updateTodo);
router.delete('/v1/todo', auth.authenticateUser, todoController.deleteTodo);



module.exports = router