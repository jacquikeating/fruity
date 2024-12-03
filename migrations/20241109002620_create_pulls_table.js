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
    table.integer("pull_num_overall").notNullable();
    table.string("phase");
    table.string("mech");
    table.string("prog_point_reached");
    table.string("cause");
    table.JSON("players_responsible");
    table.string("log_link");
    table.string("clip_link");
    table.string("notes");
  });
};

export const down = function (knex) {
  return knex.schema.dropTable("pull");
};
