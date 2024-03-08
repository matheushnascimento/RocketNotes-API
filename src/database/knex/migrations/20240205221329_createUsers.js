exports.up = knex =>
  knex.schema.createTable("users", table => {
    table.increments("id");
    table.text("name");
    table.text("email");
    table.text("password");
    table.text("avatar").nullable;
    table.integer("created_at").default(knex.fn.now());
    table.integer("updated_at").default(knex.fn.now());
  });

exports.down = knex => knex.schema.dropTable("users", table => {});
