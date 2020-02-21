const db = require('../data/db-config.js');

module.exports = {
  getProductByID,
  getResourceById,
  getTaskById,
  getProduct,
  getResource,
  getTask,
  addProduct,
  addResource,
  addTask
};

function getProductByID(id) {
  return db('project').where({ id }).first();
};

function getResourceById(id) {
  return db('resource').where({ id }).first();
}

function getTaskById(id) {
  return db('task').where({ id }).first();
}

function getProduct() {
  return db('project');
};

function getResource() {
  return db('resource');
};

function getTask() {
  return db('task as t')
    .join('project as p', 't.project_id', 'p.id')
    .select('t.*', 'p.project_name', 'p.project_desc')
};


function addProduct(projectData) {
  return db('project').insert(projectData)
    .then(arr => {
      return getProductByID(arr[0]);
    })
};

function addResource(resourceData) {
  return db('resource').insert(resourceData)
    .then(arr => {
      return getResourceById(arr[0]);
    })
};

function addTask(taskData, project_id) {
  return db('task').insert({ ...taskData, project_id });
}