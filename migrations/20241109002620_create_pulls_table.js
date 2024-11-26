export const up = function (knex) {
  return knex.schema.createTable("pull", (table) => {
    table.increments("id").primary();
    table
      .integer("session_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("session")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.integer("pull_num_today").notNullable();
    table.string("phase").notNullable();
    table.string("mech").notNullable();
    table.string("prog_point_reached");
    table.string("cause").notNullable();
    table.JSON("players_responsible");
    table.timestamp("ended_at").defaultTo(knex.fn.now());
    table.string("log_link");
    table.string("clip_link");
    table.string("notes");
  });
};

export const down = function (knex) {
  return knex.schema.dropTable("pull");
};
