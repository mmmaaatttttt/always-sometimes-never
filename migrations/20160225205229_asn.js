
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', function(table) {
      table.increments();
      table.string('email');
      table.string('password');
      table.string('displayName');
      table.string('picture');
      table.string('facebook');
      table.string('google');
      table.string('twitter');
      table.timestamps();
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users')
  ]);
};
