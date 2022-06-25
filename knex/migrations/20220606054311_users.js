exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.string('auth0_id')
    table.string('user_name')
    table.string('first_name')
    table.string('last_name')
    table.string('address')
    table.string('suburb')
    table.string('city')
    table.string('postcode')
    table.string('lat')
    table.string('lng')
    table.string('email')
    table.string('phone')
    table.string('user_type')
    table.dateTime('created_at')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
