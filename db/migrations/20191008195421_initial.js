
exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable('dances', function(table) {
      table.increments('id').primary();
      table.string('name');
      table.string('type');
      table.timestamps(true, true);
    })
  ])
};

exports.down = function(knex) {
  return Promise.all([
    knex.schema.dropTable('dances')
  ])
};
