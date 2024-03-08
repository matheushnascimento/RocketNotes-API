exports.up = knex =>
  knex.schema.createTable("links", table => {
    table.increments("id");
    table.text("url");

    table
      .integer("note_id")
      .references("id")
      .inTable("notes")
      .onDelete("CASCADE");
    table.integer("created_at").default(knex.fn.now());
  });
exports.down = knex => knex.schema.dropTable("links", table => {});
