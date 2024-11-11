import sessionData from "../seed_data/session.js";

export const seed = async function (knex) {
  await knex("session").del();
  await knex("session").insert(sessionData);
};
