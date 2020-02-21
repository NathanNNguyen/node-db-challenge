const db = require('../data/db-config.js');

module.exports = {
  getProduct,
  getResource,
  getTask,
  addProduct,
  addResource,
  addTask
};

function getProduct() {
  return db('project');
};

function getResource() {
  return db('resource');
};

function getTask() {
  return db('task');
};


function addProduct(projectData) {
  return db('project').insert(projectData);
};

function addResource(resourceData) {
  return db('resource').insert(resourceData);
};

function addTask(taskData, project_id) {
  return db('task').insert(...taskData, project_id);
}