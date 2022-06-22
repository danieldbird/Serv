/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {
      id: 1,
      auth0_id: 'google-oauth2|100533594005351605752',
      username: 'danieldbird',
      address: '186A Henderson Valley Road',
      suburb: 'Henderson',
      city: 'Auckland',
      postcode: '0612',
      lat: '-36.8962252',
      lng: '174.6164941',
      email: 'danieldbird@gmail.com',
      phone: '0279557009',
      user_type: 'provider',
    },
    {
      id: 2,
      auth0_id: 'google-oauth2|574563463453453453444',
      username: 'jimmydevz',
      address: '10 Cradock Street',
      suburb: 'Avondale',
      city: 'Auckland',
      postcode: '1026',
      lat: '-36.88887990000001',
      lng: '174.7023632',
      email: 'jimmyman@gmail.com',
      phone: '0275433456',
      user_type: 'provider',
    },
    {
      id: 3,
      auth0_id: 'google-oauth2|434534534534534544453',
      username: 'sallyfielder',
      address: '66 Sale Street',
      suburb: 'Auckland CBD',
      city: 'Auckland',
      postcode: '1010',
      lat: '-36.8497472',
      lng: '174.7554059',
      email: 'sallyfielder23@gmail.com',
      phone: '0274384854',
      user_type: 'client',
    },
    {
      id: 4,
      auth0_id: 'google-oauth2|234234234234552342234',
      username: 'barrywalters67',
      address: '12 Nicholls Lane',
      suburb: 'Parnell',
      city: 'Auckland',
      postcode: '1010',
      lat: '-36.85287530000001',
      lng: '174.7752856',
      email: 'barrywalters67@gmail.com',
      phone: '0279994756',
      user_type: 'client',
    },
  ])
}
