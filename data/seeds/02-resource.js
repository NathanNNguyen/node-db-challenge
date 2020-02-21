
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('resource').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resource').insert([
        { resource_name: 'Resource 1', resource_desc: 'Knexjs.org' },
        { resource_name: 'Resource 2', resource_desc: 'SqliteStudio' },
        { resource_name: 'Resource 3', resource_desc: 'Insomnia/Postman' }
      ]);
    });
};
