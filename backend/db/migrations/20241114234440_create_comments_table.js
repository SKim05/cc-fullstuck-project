// { id: x, title: xxxx, completed: true/false}
exports.up = function (knex) {
    return knex.schema.createTable('comments', (table) => {
      table.increments('id').primary()
      table.string('volume').notNullable()
      table.string('username').notNullable()
      table.string('text').notNullable()
      table.string('good').notNullable()
    })
  }
  
  exports.down = function (knex) {
    return knex.schema.dropTable('comments')
  }
