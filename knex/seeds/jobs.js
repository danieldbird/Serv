exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('jobs').del()
  await knex('jobs').insert([
    {
      id: 1,
      user_id: 3,
      address: '66 Sale Street',
      suburb: 'Auckland CBD',
      city: 'Auckland',
      postcode: '1010',
      lat: '-36.8497472',
      lng: '174.7554059',
      summary: 'I need my lawns mowed.',
      description:
        'I need my lawns mowed every fortnight, its around 5m x 20m, and quite long at the moment, please see the pictures attached.',
      frequency: '14',
      images:
        'https://media.istockphoto.com/photos/backyard-in-need-of-gardening-picture-id92179462?k=20&m=92179462&s=612x612&w=0&h=ZKs0G7c6mPyPPuUvmsyseKTSaOfljkt2IRkTEZ40b5o=',
      accessibility: '1',
      category: 'gardening',
      status: 'open',
      created_at: new Date(),
    },
    {
      id: 2,
      user_id: 4,
      address: '12 Nicholls Lane',
      suburb: 'Parnell',
      city: 'Auckland',
      postcode: '1010',
      lat: '-36.85287530000001',
      lng: '174.7752856',
      summary: 'I need my hedges trimmed.',
      description: 'I need all of the hedges around my property trimmed once every 3 months.',
      frequency: '14',
      images:
        'https://i2-prod.chroniclelive.co.uk/incoming/article14904017.ece/ALTERNATES/s1200c/Hedges-overgrowing-the-footpaths-on-Beaumont-Drive-Loughborough.jpg',
      accessibility: '1',
      category: 'gardening',
      status: 'open',
      created_at: new Date(),
    },
  ])
}
