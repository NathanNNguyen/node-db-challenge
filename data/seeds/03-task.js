
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('task').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        { task_desc: 'Use migration to create tables', notes: '', completed: false, project_id: 1 },
        { task_desc: 'Test latest and rollback', notes: '', completed: false, project_id: 1 },
        { task_desc: 'Add seeds', notes: '', completed: false, project_id: 2 },
        { task_desc: 'Test if seeds work', notes: '', completed: false, project_id: 2 },
        { task_desc: 'Use pre-workout', notes: '', completed: false, project_id: 3 },
        { task_desc: 'Check to have gloves/support items', notes: '', completed: false, project_id: 3 },
      ]);
    });
};
