export const up = function (knex) {
  return knex.schema.createTable("player", (table) => {
    table.string("name").primary();
    table.string("job").notNullable();
    table.string("role").notNullable();
  });
};

export const down = function (knex) {
  return knex.schema.dropTable("sessions").dropTable("pulls");
};
