exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('jobs').del()
  await knex('jobs').insert([
    {
      id: 1,
      auth0_id: 'google-oauth2|100533594005351605752',
      address: '186A Henderson Valley Road, Henderson',
      description: 'I need my lawns mowed.',
      image:
        'https://media.istockphoto.com/photos/backyard-in-need-of-gardening-picture-id92179462?k=20&m=92179462&s=612x612&w=0&h=ZKs0G7c6mPyPPuUvmsyseKTSaOfljkt2IRkTEZ40b5o=',
      category: 'gardening',
      status: 'open',
      created_at: new Date(),
    },
    {
      id: 2,
      auth0_id: 'google-oauth2|100533594005351605752',
      address: '186A Henderson Valley Road, Henderson',
      description: 'I need my hedges trimmed.',
      image:
        'https://i2-prod.chroniclelive.co.uk/incoming/article14904017.ece/ALTERNATES/s1200c/Hedges-overgrowing-the-footpaths-on-Beaumont-Drive-Loughborough.jpg',
      category: 'gardening',
      status: 'open',
      created_at: new Date(),
    },
  ])
}
