// { id: x, title: xxxx, completed: true/false}
exports.up = function (knex) {
    return knex.schema.createTable('books', (table) => {
      table.increments('id').primary()
      table.string('volume').notNullable()
      table.string('subtitle').notNullable()
      table.string('intro').notNullable()
      table.string('url').notNullable()
    })
  }
  
  exports.down = function (knex) {
    return knex.schema.dropTable('books')
  }
