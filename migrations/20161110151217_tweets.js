exports.up = (knex, Promise) => {
  return knex.schema.createTable('tweets', (table) => {
    table.increments('id').primary()
    table.string('date')
    table.string('city')
    table.string('text')
    table.string('subject')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('tweets')
}
