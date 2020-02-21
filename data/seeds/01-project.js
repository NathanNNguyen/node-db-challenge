
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('project').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        { project_name: 'Project 1', project_desc: 'Create tables', completed: false },
        { project_name: 'Project 2', project_desc: 'Make seeds', completed: false },
        { project_name: 'Project 3', project_desc: 'Go to gym', completed: false }
      ]);
    });
};
