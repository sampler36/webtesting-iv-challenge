exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries and resets ids
  return knex('smurfs')
    .truncate()
    .then(function() {
      return knex('smurfs').insert([
        { name: 'smurfete' },
        { name: 'clumsy' },
        { name: 'hefty' },
      ]);
    });
};
