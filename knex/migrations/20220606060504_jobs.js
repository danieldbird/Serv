exports.up = function (knex) {
  return knex.schema.createTable('jobs', (table) => {
    table.increments('id').primary()
    table.string('user_id')
    table.string('address')
    table.string('suburb')
    table.string('city')
    table.string('postcode')
    table.string('lat')
    table.string('lng')
    table.string('summary')
    table.string('description')
    table.string('frequency')
    table.string('images')
    table.string('accessibility')
    table.string('category')
    table.string('status')
    table.dateTime('created_at')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('jobs')
}
