exports.up = function (knex) {
  return knex.schema.createTable('jobs', (table) => {
    table.increments('id').primary()
    table.string('auth0_id')
    table.string('address')
    table.string('description')
    table.string('image')
    table.string('category')
    table.string('status')
    table.string('created_at')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('jobs')
}
