import pullData from "../seed_data/pull.js";

export const seed = async function (knex) {
  await knex("pull").del();
  await knex("pull").insert(pullData);
};
