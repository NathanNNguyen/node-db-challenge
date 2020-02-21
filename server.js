const express = require('express');
const projectRouter = require('./router/project-router.js');
const resourceRouter = require('./router/resource-router.js');
const taskRouter = require('./router/task-router.js');
const server = express();

server.use(express.json());
server.use('/api/project', projectRouter);
server.use('/api/resource', resourceRouter);
server.use('/api/task', taskRouter);


module.exports = server;