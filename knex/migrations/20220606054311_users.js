exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.string('auth0_id')
    table.string('username')
    table.string('address')
    table.string('suburb')
    table.string('city')
    table.string('postcode')
    table.string('lat')
    table.string('lng')
    table.string('email')
    table.string('phone')
    table.string('user_type')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
