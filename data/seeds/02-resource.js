
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('resource').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resource').insert([
        { resource_name: 'Vscode', resource_desc: 'Install VSCode to work on project' },
        { resource_name: 'Lambda Help Channel', resource_desc: 'Reach out for help from channel' },
        { resource_name: 'JavaScript', resource_desc: 'Use JavaScript for these projects' }
      ]);
    });
};
