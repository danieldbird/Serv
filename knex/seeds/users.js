/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    { id: 1, auth0_id: 'google-oauth2|100533594005351605752' },
    { id: 2, auth0_id: 'google-oauth2|125234534534567465345' },
    { id: 3, auth0_id: 'google-oauth2|679685674646463534533' },
  ])
}
