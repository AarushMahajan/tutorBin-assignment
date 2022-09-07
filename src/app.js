const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routers/user-rouers/user-router');
const todoRouter = require('./routers/todo-router/todo-router');
require('./db/mongoose');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(userRouter);
app.use(todoRouter);

module.exports = app;