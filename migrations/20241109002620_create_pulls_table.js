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
    table.string("cause").notNullable();
    table.string("players_responsible");
    // Should it be responsible_player_1 and 2? references player name?
    table.string("prog_point_reached");
    table.timestamp("ended_at").defaultTo(knex.fn.now());
  });
};

export const down = function (knex) {
  return knex.schema.dropTable("pull");
};
