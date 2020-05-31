
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('task').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        { task_desc: 'Brainstorming, think about how the UI would look like', notes: '', completed: false, project_id: 1 },
        { task_desc: `Start coding, have your index.html on live so you would see it's changes`, notes: '', completed: false, project_id: 1 },
        { task_desc: 'Think about what components you would need, have a good idea of the stucture of your SPA', notes: '', completed: false, project_id: 2 },
        { task_desc: 'Start coding, restructure your components if needed', notes: '', completed: false, project_id: 2 },
        { task_desc: 'Design which endpoints would be for the server', notes: '', completed: false, project_id: 3 },
        { task_desc: 'Start coding, test all your endpoints while doing so', notes: '', completed: false, project_id: 3 },
      ]);
    });
};
