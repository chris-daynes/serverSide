exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('tweets').del(),
      // Inserts seed entries
      knex('tweets').insert({id: 1, author: 'Steveo', text: 'Aggressive Ponytail #freebandnames says Trump', date: 'Tue Nov 9 03:35:21 +0000 2016', city: 'LA, CA', subject: 'Trump'}),
      knex('tweets').insert({id: 2, author: 'Gaela-Cool', text: 'Clinton has a fine booty', date: 'Tue Nov 9 03:35:21 +0000 2016', city: 'LA, CA', subject: 'Clinton'})
    )
}
