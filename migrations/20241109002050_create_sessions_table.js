export const up = function (knex) {
  return knex.schema.createTable("session", (table) => {
    table.increments("id").primary();
    table.date("date").notNullable();
    table.integer("prog_phase").notNullable();
    table.string("prog_mech").notNullable();
    table.string("fflogs_link");
    table.string("twitch_link");
    table.JSON("roster").notNullable();
    // alternate: store as 8 fields, like mainTank, offTank, regenHealer, etc.
    // This may be needed for tracking # of gold stars?
  });
};

export const down = function (knex) {
  return knex.schema.dropTable("session");
};
