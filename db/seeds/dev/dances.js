const dancesData = [
  { id: '1', name: 'Salsa', type: 'sexy' },
  { id: '2', name: 'Hip Hop', type: 'fun' },
  { id: '3', name: 'Waltz', type: 'tricky' }
]

const createDance = (knex, dance) => {
  return knex('dances').insert({
    name: dance.name,
    type: dance.type
  }, 'id');
};

exports.seed = (knex) => {
  return knex('dances').del()
    .then(() => {
      let dancePromises = [];

      dancesData.forEach(dance => {
      dancePromises.push(createDance(knex, dance));
      });
      return Promise.all(dancePromises);
    })
    .catch(error => console.log(`Error seeding data: ${ error }`));
};