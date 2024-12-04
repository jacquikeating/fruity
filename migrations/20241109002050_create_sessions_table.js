export const up = function (knex) {
  return knex.schema.createTable("session", (table) => {
    table.increments("id").primary();
    table.date("date").notNullable();
    table.integer("prog_phase").notNullable();
    table.string("prog_mech").notNullable();
    table.string("fflogs_link");
    table.string("twitch_links");
    table.string("roster").notNullable();
    table.string("goal");
    table.string("notes");
  });
};

export const down = function (knex) {
  return knex.schema.dropTable("session");
};
