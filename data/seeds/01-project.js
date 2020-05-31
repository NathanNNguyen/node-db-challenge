
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('project').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        { project_name: 'Build a marketing page', project_desc: 'Create a web page using HTML, CSS', completed: false },
        { project_name: 'Build a single page application for a react project', project_desc: 'Create a web page using React', completed: false },
        { project_name: 'Build a server with functional CRUD request', project_desc: 'Use NodeJS to build a server', completed: false }
      ]);
    });
};
