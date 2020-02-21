
exports.up = function (knex) {
  return knex.schema
    .createTable('project', tbl => {
      tbl.increments();
      tbl.string('project_name', 128).notNullable();
      tbl.string('project_desc');
      tbl.boolean('completed').notNullable().defaultTo(false);
    })

    .createTable('resource', tbl => {
      tbl.increments();
      tbl.string('resource_name', 128).notNullable().unique();
      tbl.string('resource_desc');
    })

    .createTable('task', tbl => {
      tbl.increments();
      tbl.string('task_desc').notNullable;
      tbl.string('notes');
      tbl.boolean('completed').notNullable().defaultTo(false);

      // set up foreign key
      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('project'); // must defines what table it refers to
    })

    .createTable('ps', tbl => {
      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('project');

      tbl.integer('resource_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('resource');

      tbl.primary(['project_id', 'resource_id']); // make both columns a primary key
    })
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('ps')
    .dropTableIfExists('task')
    .dropTableIfExists('resource')
    .dropTableIfExists('project')
};
