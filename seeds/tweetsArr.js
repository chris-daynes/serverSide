exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('tweets').insert({id: 1, date: 'Mon Sep 24 03:35:21 +0000 2012', city: 'LA, CA', text: 'Aggressive Ponytail #freebandnames', subject: ''}),
        knex('tweets').insert({id: 2, date: '', city: '', text: '', subject: ''}),
        knex('tweets').insert({id: 3, date: '', city: '', text: '', subject: ''})
      ]);
    });
};
