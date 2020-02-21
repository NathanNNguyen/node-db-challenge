const db = require('../data/db-config.js');

module.exports = {
  getProduct,
  getResource,
  getTask
}

function getProduct() {
  return db('project');
};

function getResource() {
  return db('resource');
};

function getTask() {
  return db('task');
};
